import { ApplicationConfig } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { jwtInterceptor } from './_interceptors/jwt.interceptor';
import { GALLERY_CONFIG, GalleryConfig } from 'ng-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loadingInterceptor } from './_interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    RouterModule,
    provideRouter(routes),
    FormsModule,
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    NgxSpinnerModule,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: jwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: loadingInterceptor, multi: true },
    {
      provide: GALLERY_CONFIG,
      useValue: {
        autoHeight: true,
        imageSize: 'cover'
      } as GalleryConfig
    }
  ]
};
