import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';

export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let urlAPI: string;

    if (req.url.includes('assets/i18n/')) {
      urlAPI = environment.app;
    } else {
      urlAPI = environment.api;
    }

    const urlRequest: HttpRequest<unknown> = req.clone({
      url: `${urlAPI}/${req.url}`,
    });

    return next.handle(urlRequest);
  }
}
