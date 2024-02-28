import { ApplicationConfig } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { jwtInterceptor } from './_interceptors/jwt.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    RouterModule,
    provideRouter(routes),
    FormsModule,
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: jwtInterceptor, multi: true }
  ]
};
