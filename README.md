# Angular : rendu final

### Léo Robin et Cécile Barouk

# Video de présenation:
(trop lourde pur github)
https://unice-my.sharepoint.com/:v:/g/personal/cecile_barouk_etu_unice_fr/EaSC-0W5ZmlIi-ueDO3c3qkBhXJcIqh7_HxW1ZYRilRmPQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=IBzkbV


## Comment run le projet:

le projet est disponible a ce lien:

https://assignment-app-1ou4.onrender.com/home

Logins pour tester:
- User | password
- Admin | password 

le backend:
https://assignment-appbackend.onrender.com/api/assignments

## Liens github

front: https://github.com/Cecileblbl/AssignementApp

back: https://github.com/Cecileblbl/Assignement-appBackend

## Ce qui a ete fait:

- Au moins 1000 assignments dans la base de données.

- Gestion de login:

Dans la toolbar un formulaire login/password + bouton connexion.

Component d'affichage de profile avec bouton de deconnection.
Si on est loggué en tant que user autorisé on a le droit de modifier / ajouter un assignment. Si on est loggué en admin on pourra en plus supprimer des assignments. Si on n'est pas loggué on ne peut que consulter.

AVANCÉ : Cas mieux (mais pas mal de travail sur back-end): en créant une collection Utilisateurs dans MongoDB, et en validant que le user/password est correct.

- formulaire d'ajout de user

Ajouter de nouvelles propriétés au modèle des Assignments
Auteur (nom de l'élève)
Matière
Une image sera associée à chaque matière et une photo du prof
Note sur 20, on ne peut marquer la note seulement si l'assignment est rendu
Remarques sur l'assignment
APPROCHE FACILE : on ajoute des propriétés au modèle des Assignments (dans le front-end et dans le back-end).

- Améliorer l'affichage des Assignments
  Vous afficherez les assignments dans une table angular material. A vous de voir si vous arrivez à la rendre triable, avec ligne des headers fixe (qui ne scrolle pas), avec la pagination avec paginator.

Ajoutez un moyen pour avoir une vue de détail sur un assignment.

- Les formulaires d'ajout et de détails proposeront un choix fixe de matières (et associeront automatiquement le prof et l'image illustrant la matière)

- OPTIONNEL : Ajouter un champ de recherche sur le nom de l'assignment qui enverra une requête et affichera les résultats correspondants à la recherche.

- Formulaire de type Stepper (formulaire en plusieurs étapes) pour l'ajout d'Assignments

- Hébergement sur render.com

- Notifications toaster

- Dashboard de graphiques
