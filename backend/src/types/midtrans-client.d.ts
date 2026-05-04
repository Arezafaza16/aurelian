declare module 'midtrans-client' {
  interface SnapOptions {
    isProduction: boolean;
    serverKey: string;
    clientKey: string;
  }

  interface TransactionResponse {
    token: string;
    redirect_url: string;
  }

  interface NotificationResponse {
    order_id: string;
    transaction_status: string;
    fraud_status: string;
    [key: string]: unknown;
  }

  interface Transaction {
    notification(body: Record<string, unknown>): Promise<NotificationResponse>;
    status(orderId: string): Promise<NotificationResponse>;
  }

  class Snap {
    constructor(options: SnapOptions);
    transaction: Transaction;
    createTransaction(parameter: Record<string, unknown>): Promise<TransactionResponse>;
  }
}
