import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpErrorResponse
} from '@angular/common/http';
import {
	delay,
	retry,
	timeout,
	retryWhen,
	concatMap,
	catchError
} from 'rxjs/operators';
//import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { throwError, Observable, of } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
	/* constructor(
		private _router: Router,
	) {} */

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		/**
		 * *Interceptor for handling error
		 *
		 * @date 04 Apr 2021
		 * @developer Rahul Kundu
		 */

		// catching error without retry
		return next
			.handle(request)
			.pipe(catchError((error) => this.errorHandler(error)));

		// with retry operator
		// return next.handle(request).pipe(
		//     timeout(appSettings.ajaxTimeout),
		//     retry(1),
		//     catchError((error) => this.errorHandler(error))
		// );

		// with retryWhen, delay, concatMap operator
		// return next.handle(request).pipe(
		// 	timeout(appSettings.ajaxTimeout),
		// 	retryWhen((errors) => {
		// 		return errors.pipe(
		// 			concatMap((error, count) => {
		// 				if (count < retryCount) {
		// 					return of(error);
		// 				}
		// 				return throwError(error);
		// 			}),
		// 			delay(retryDelay)
		// 		);
		// 	}),
		// 	catchError((error) => this.errorHandler(error))
		// );
	}

	/**
	 * *Handling error based on response codes
	 * @param http event response
	 * @date 04 Apr 2021
	 * @developer Rahul Kundu
	 */
	private errorHandler(error: HttpErrorResponse): Observable<HttpEvent<any>> {
		const httpErrorCode: number = error['status'];
		switch (httpErrorCode) {
			/* case StatusCodes.BAD_REQUEST:
				//this._router.navigate(['/page-not-found']);
				break;
			case StatusCodes.UNAUTHORIZED:
				this._authService.clearUserInfo();
				break;
			case StatusCodes.NOT_FOUND:
				//this._router.navigate(['/page-not-found']);
				break;
			case StatusCodes.INTERNAL_SERVER_ERROR:
				//this._router.navigate(['/internal-server-error']);
				break; */
			case 401:
				localStorage.removeItem('admin_info');
				localStorage.removeItem('admin_token');
				location.reload();
				break;
			default:
				console.log('Sorry! something went wrong.', 'Error!');
				// location.reload();
		}
		return throwError(error);
	}
}
