import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHtppInterceptorService } from './AuthHtppInterceptorService';

export const HttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthHtppInterceptorService, multi: true }
];
