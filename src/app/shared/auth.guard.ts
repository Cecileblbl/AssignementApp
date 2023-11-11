import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let authService: AuthService = Inject(AuthService);
  let router: Router = Inject(Router);

  return authService.isAdmin().then((authentifie) => {
    if (authentifie) {
      console.log('authentifié');
      return true;
    } else {
      router.navigate(['/home']);
      return false;
    }
  });
};
