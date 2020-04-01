import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from '@app/core/interceptors/api.interceptor';
import { ErrorHandler } from '@angular/core';
import { SentryErrorHandler } from '@app/core/sentry-error-handler';

export const CORE_MODULE_INTERCEPTORS: unknown[] = [
  {
    provide: ErrorHandler,
    useClass: SentryErrorHandler,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true,
  },
];
