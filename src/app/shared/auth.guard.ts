import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);

  if (authService.admin == true) {
    console.log('Vous êtes authentifié, navigation autorisée !');
    return true;
  } else {
    console.log("Vous n'êtes pas authentifié ! Navigation refusée !");
    // et on retourne vers la page d'accueil
    router.navigate(['/login']);
    return false;
  }
};

// return authService.isAdmin().then((authentifie) => {
//   if (authentifie) {
//     console.log('Vous êtes admin, navigation autorisée !');
//     return true;
//   } else {
//     console.log("Vous n'êtes pas admin ! Navigation refusée !");
//     // et on retourne vers la page d'accueil
//     router.navigate(['/login']);
//     return false;
//   }
// });
