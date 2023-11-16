import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  // injection par programme (au lieu de le faire dans
  // le constructeur d'un composant)
  let authService = inject(AuthService);
  let router = inject(Router);

  // si ça renvoie true, alors, on peut activer la route
  return authService.isAdmin().then((authentifie) => {
    if (authentifie) {
      console.log('You are Admin !');
      return true;
    } else {
      console.log("Not Admin, you can't go there !");
      // et on retourne vers la page d'accueil
      router.navigate(['/home']);
      return false;
    }
  });
};
