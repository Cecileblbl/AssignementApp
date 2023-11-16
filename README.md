[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/6epMQcoo)

# Angular : submitted n°2

Repository où déposer le projet n°2 Angular

### name[^1] :Barouk

### Préname[^2] :Cecile

## A faire[^3]

- [x] Suivre le cours jusqu'à la page 180
- [x] Intégrer toolbar et navbar du submitted n°1
- [x] Identification par **login/password**
  - ajouter un tableau de login/password/role (avec rôle qui est soit **user** soit **admin**) dans le service d'authentification
  - modifier le code pour avoir `isLogged()` **ET** `isAdmin()` au lieu de juste `isAdmin()`
- [x] Au lieu du slider `LogIn`, ajouter un bouton connecter (avec une _mat-icon_ adaptée) qui amène à un composant avec un formulaire de connexion

J'ai voulu faire une template qui affiche le log out si l'utilisateur est logged in mais pas compatible avec les reactive forms.

- [x] Gestion des droits :
  - L'admin peut éditer et effacer les assignment
  - Le user peut voir le détail des assignment
  - Si on n'est pas logué on ne peut ni voir le détail, ni éditer

[^1]: à remplir
[^2]: à remplir
[^3]: vous pouvez cocher les tâches qui ont été faites en utilisant la syntaxe `[x]` dans le markdown
