import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "@environment/environment";

export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const urlRequest: HttpRequest<unknown> = req.clone({
      url: `${environment.api}/${req.url}`,
    });

    return next.handle(urlRequest);
  }
}
