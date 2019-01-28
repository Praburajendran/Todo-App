import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {

    // Clone the request to add the new header.
    const authReq = req = req.clone({
        withCredentials: true
    });


    // send the newly created request
    return next.handle(authReq)
        .catch((error, caught) => {
            // return the error to the method that called it
            return Observable.throw(error);
        }) as any;
    }
}
