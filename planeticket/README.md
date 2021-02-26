# Application PlaneTicket

## APP

* Ce component nous permet de structurer notre application en affichant sur chaque page la barre de navigation (NavBar), et de nous déplacer dans nos différentes pages grâce à un routeur.
Pour cela, nous avons importé (import { Route, BrowserRouter as Router } from "react-router-dom";) pour nous premettre cette action.
* 

## CSS

* Nous avons dans chaque component un import css from "./[Component].module.css" servant à la mise en page.
* 

## Home Page 

* Ce component appelle le component <Titre> qui affiche le titre de la page ainsi que le component <RechercheVol> qui va nous permettre de sélectionner les différentes informations nécessaires à la réservation d'un vol.
Quand nous cliquons sur le bouton Afficher les vols, les informations sélectionnées sont stockées dans le localStorage, pour être accessible pour les pages suivantes.
* 

## Réservation

* Là aussi, nous avons le component <Title> pour afficher le titre de la page.
Nous avons crée une constante SelecTrip nous permettant de récupérer les informations stockées dans le localStorage issues de notre HomePage. Pour se faire, nous avons intégré une constante Search qui nous permet de lire les informations stockées dans le localStorage au format JSON.
Nous avons une constante selection (vide) qui nous permet par la suite de récupérer les prix
sélectionnés pour le voyage et de les stocker aussi dans le localStorage.
Nous avons crée 1 useState selection pour enregistrer le prix du formulaire de la page.
Nous avons une constante history (ainsi qu'un import: import { useHistory } from "react-router-dom";) nous servant à passer à la page suivante de notre routeur tout en envoyant la donnée (prix) dans le localStorage.
Ensuite, nous créons une constante handleSubmit, servant à, premièrement éviter le rechargement de la page au clic du bouton, deuxièmement, le setItem permet de créer un tableau dans le localStorage au format JSON appellé choice. Troisièmement, le history.push permet de déterminer le path de notre routeur pour changer de page.
Vient ensuite le handleChange, qui permet de récupérer les données ciblées et de les envoyer dans notre tableau selection crée à cet effet.
Pour finir, nous avons l'import { Form } from "react-bootstrap" nous permettant la mise en page de notre formulaire dans le return.
* 

## Confirm

* Nous commençons comme pour la page précédente, par récupérer les informations du localStorage (search et choice). 
Nous avons ensuite la constante calculPrix, pour nous permettre de calculer le prix total du voyage grâce aux informations récupérées du localStorage.
Nous avons à nouveau créer une constante prixTotal vide pour y stocker le prix total avant paiement.
Ensuite, nous avons un useState prixTotal pour enregistrer le prix total contenu dans notre formulaire.
Nous avons l'import { Link } from "react-router-dom" qui nous permet créer une balise <Link> pour changer de page au clique de nos icon Pensil et de retourner à la page de Sélection. 
NB : Nous avons utilisé un 'eval' en dernier recours, ne savons que ce n'est pas conseillé. 
* 

## Reservation

* Dans cette page, nous voulions récuperer les information de nos différents localStorage et afficher un récapitulatif des réservations Aller et Retour. 
Nous devions aussi avoir un bouton annuler qui permet justement vider les différents localStorage avec les commmandes    localStorage.removeItem("search"); et localStorage.removeItem("choice"); grâce a un handleSubmit, codé comme plus haut. 
* 

## User 

* La page Profil a pour but d'afficher les coordonnées de notre User et aussi de montrer ses anciens et  futurs voyages. Notre user pourra modifier ses coordonnées ici.   
* 
