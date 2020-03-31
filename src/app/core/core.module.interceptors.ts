import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from '@app/core/interceptors/api.interceptor';
import { AuthInterceptor } from '@app/core/interceptors/auth.interceptor';

export const CORE_MODULE_INTERCEPTORS: unknown[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];
