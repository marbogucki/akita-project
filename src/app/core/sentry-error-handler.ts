import * as Sentry from '@sentry/browser';
import { ErrorHandler, Injectable } from '@angular/core';

Sentry.init({
  dsn: 'https://04fc000f85ef49fb877975d9d2b9b7c7@sentry.io/5185388',
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  public handleError(error: any): void {
    console.error(error);
    const eventId = Sentry.captureException(error.originalError || error);
    Sentry.showReportDialog({ eventId });
  }
}
