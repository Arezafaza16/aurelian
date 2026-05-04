import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as midtransClient from 'midtrans-client';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentService {
  private readonly snap: midtransClient.Snap;
  private readonly logger = new Logger(PaymentService.name);

  constructor(private readonly configService: ConfigService) {
    this.snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: this.configService.get<string>('MIDTRANS_SERVER_KEY', ''),
      clientKey: this.configService.get<string>('MIDTRANS_CLIENT_KEY', ''),
    });
  }

  async createSnapToken(dto: CreatePaymentDto) {
    const orderId = `AJ-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;

    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: dto.amount,
      },
      item_details: [
        {
          id: dto.packageTitle.toLowerCase().replace(/\s+/g, '-'),
          price: dto.amount,
          quantity: 1,
          name: dto.packageTitle,
        },
      ],
      customer_details: {
        first_name: dto.customerName,
        email: dto.customerEmail,
      },
    };

    this.logger.log(`Creating Snap token for order ${orderId} — ${dto.packageTitle} — Rp ${dto.amount.toLocaleString('id-ID')}`);

    const transaction = await this.snap.createTransaction(parameter);

    this.logger.log(`Snap token created: ${transaction.token}`);

    return {
      token: transaction.token,
      redirect_url: transaction.redirect_url,
      order_id: orderId,
    };
  }

  async handleNotification(notificationBody: Record<string, unknown>) {
    const statusResponse = await this.snap.transaction.notification(notificationBody);

    const orderId = statusResponse.order_id;
    const transactionStatus = statusResponse.transaction_status;
    const fraudStatus = statusResponse.fraud_status;

    this.logger.log(`Notification received — Order: ${orderId}, Status: ${transactionStatus}, Fraud: ${fraudStatus}`);

    if (transactionStatus === 'capture') {
      if (fraudStatus === 'accept') {
        this.logger.log(`Payment captured for order ${orderId}`);
      }
    } else if (transactionStatus === 'settlement') {
      this.logger.log(`Payment settled for order ${orderId}`);
    } else if (transactionStatus === 'cancel' || transactionStatus === 'deny' || transactionStatus === 'expire') {
      this.logger.warn(`Payment ${transactionStatus} for order ${orderId}`);
    } else if (transactionStatus === 'pending') {
      this.logger.log(`Payment pending for order ${orderId}`);
    }

    return { status: transactionStatus, order_id: orderId };
  }
}
