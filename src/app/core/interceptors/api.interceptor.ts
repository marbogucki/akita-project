import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';

export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let url: string;

    if (req.url.includes('assets/i18n/')) {
      url = `${environment.app}/${req.url}`;
    } else {
      url = `${environment.api}/${req.url}`;
    }

    const urlRequest: HttpRequest<unknown> = req.clone({
      url,
    });

    return next.handle(urlRequest);
  }
}
