import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '../interceptors/auth.interceptor';
import { AuthGuard } from '../guards/auth.class.gurad';
import { AUTH_SERVICE, PERMISSION_SERVICE, USER_SERVICE } from '../constants/injection.constant';
import { AuthService } from './services/auth/auth.service';
import { PermissionService } from './services/permissions/permission.service';
import { UserService } from './services/user/user.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
  importProvidersFrom(AuthGuard),
  {
    provide: AUTH_SERVICE,
    useClass: AuthService
  },
  {
    provide: USER_SERVICE,
    useClass: UserService
  },
  {
    provide: PERMISSION_SERVICE,
    useClass: PermissionService
  },
  provideHttpClient(withInterceptors([authInterceptor]), withFetch())]
};
