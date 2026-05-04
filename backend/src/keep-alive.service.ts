import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class KeepAliveService {
  private readonly logger = new Logger(KeepAliveService.name);

  // Ping every 1 minute to prevent Render from sleeping
  @Cron(CronExpression.EVERY_MINUTE)
  async handleCron() {
    const renderUrl = process.env.RENDER_EXTERNAL_URL;
    
    // Only ping if deployed on Render
    if (renderUrl) {
      try {
        this.logger.log(`Pinging self at ${renderUrl}/api/ping to keep alive...`);
        const response = await fetch(`${renderUrl}/api/ping`);
        if (response.ok) {
          this.logger.log('Ping successful. Backend is awake.');
        } else {
          this.logger.warn(`Ping failed with status: ${response.status}`);
        }
      } catch (error) {
        this.logger.error('Failed to ping self', error);
      }
    }
  }
}
