import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        let modifiedRequest = req.clone({
            headers:new HttpHeaders().set('token', 'xyz'),
            params: new HttpParams().set('getFull', true)
        });
        
        return next.handle(modifiedRequest);
    }

}