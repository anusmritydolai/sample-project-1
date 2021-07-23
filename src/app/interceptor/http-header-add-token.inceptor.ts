import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpAuthHeaderInterceptor implements HttpInterceptor {

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		let contentType: string | undefined;
		if (request.headers.has('Content-Type')) {
			contentType = request.headers.get('Content-Type') as string;
		}

		/**
		 * Setting header's config throught interceptor
		 */
		const headersConfig: any = {
			// 'X-Content-Type-Options': 'nosniff'
			/* 'Content-Type':
				contentType !== undefined ? contentType : 'application/json',
			'Accept': 'application/json' */
		};

		/**
		 * If token found setting it in header
		 */
		// const token: string = localStorage.getItem('token');
		// if (token) {
		// 	headersConfig['Authorization'] = 'Bearer ' + token;
		// }

		const HTTPRequest = request.clone({ setHeaders: headersConfig });
		return next.handle(HTTPRequest);
	}
}
