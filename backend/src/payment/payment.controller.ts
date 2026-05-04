import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('create-snap-token')
  async createSnapToken(@Body() dto: CreatePaymentDto) {
    return this.paymentService.createSnapToken(dto);
  }

  @Post('notification')
  @HttpCode(200)
  async handleNotification(@Body() body: Record<string, unknown>) {
    return this.paymentService.handleNotification(body);
  }
}
