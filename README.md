

# Projet 7 - Kasa 
Dernier projet de la formation Developpeur Web OpenClassRoom

![Alt text](https://github.com/theo0233/Projet_7_Kasa/blob/bdea2f5d893d27ca71038c3410404f2e81bf7c47/src/assets/Kasa_logo.jpeg)

### Rappel du contexte : 
En tant que developpeur front, j'avais pour consigne de développer, pour Kasa, sa nouvelle plateforme web de location immobilière entre particulier.
Les maquettes ainsi que les ressources nécessaires m'ont été transmises via [Figma](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=3%3A0&t=fyzCSjHU6NT9893o-0) 

### Contraintes fonctionnelles

● Pour le défilement des photos dans la galerie (composant Gallery) : </br>
    _Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. </br> 
    _Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.</br> 
    _S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.</br>
● La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.</br>
● Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. </br>
● Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.</br>
    _Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.</br>


### Contraintes techniques

React :
Il est impératif d’utiliser ces éléments de React pour un code de qualité :</br>
● Découpage en composants modulaires et réutilisables ;</br>
● Un composant par fichier ;</br>
● Structure logique des différents fichiers ;</br>
● Utilisation des props entre les composants ;</br>
● Utilisation du state dans les composants quand c'est nécessaire ;</br>
● Gestion des événements ;

### Installation du projet 

```bash
git clone https://github.com/theo0233/Projet_7_Kasa.git
cd Projet_7_Kasa
npm install
npm run start
```
L'application se lancera sur http://localhost:3000/ par défaut.
