import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppService } from './app.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OthersService } from './services/others.service';
import { HttpAuthHeaderInterceptor, HttpErrorInterceptor } from './interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    {
			provide: HTTP_INTERCEPTORS,
			useClass: HttpAuthHeaderInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpErrorInterceptor,
			multi: true
		},
    AppService, OthersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
