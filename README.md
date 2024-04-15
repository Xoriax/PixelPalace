# PixelPalace

### Koussai Laribi
### Johary Rakotonirina
### Lucas Tear

Pixel palace est un site d'information sur les jeux vidéo et de e-commerce.

Sur ce site vous aurez la possibilité de créer un compte, de vous y connecter et de vous renseigner sur divers jeux vidéos et goodies avec une interface agréable à regarder.

![imagehome](/images%20site/Capture%20d'écran%202024-04-15%20231955.png)

## Backend

### Configuration:
Le backend de pixelpalace utilise plusieurs modules npm pour fonctionner :

- express : Framework web pour Node.js utilisé pour créer des API RESTful.
- mongoose : Outil de modélisation d'objets MongoDB pour Node.js, permettant de définir des schémas de données et d'interagir avec la base de données.
- cors : Middleware pour gérer les requêtes CORS (Cross-Origin Resource Sharing).
- body-parser : Middleware pour analyser le corps des requêtes HTTP.
- morgan : Middleware de journalisation HTTP.
Connexion à la base de données

Le backend se connecte à une base de données MongoDB en utilisant l'URI définie dans le fichier de configuration config.js. La connexion est établie lors du démarrage du serveur. Il est possible de démarrer l'ensemble du backend et du frontend avec la commande:

```npm run dev```

Schémas de données
Le backend définit deux schémas de données à l'aide de Mongoose :

Schéma des jeux vidéo:
````localhost:3000/game ````
- nom: String
- image: String
- prix: String
- type: String
- trailer: String
- studio: String
- description: String

Schéma produits dévivés:
```` localhost:3000/pderive ````
- nom: String,
- image: String,
- prix: String,
- category: String,
- license: String,

Le backend expose plusieurs endpoints pour interagir avec les données :

- GET /game : Récupère tous les jeux vidéo.
- GET /game/:id : Récupère un jeu vidéo spécifique par son ID.
- GET /game/type/:type : Récupère tous les jeux vidéo d'un certain type.
- GET /game/studio/:studio : Récupère tous les jeux vidéo d'un certain studio.
- GET /pderive : Récupère tous les produits dérivés.
- GET /pderive/:id : Récupère un produit dérivé spécifique par son ID.
- GET /pderive/category/:category : Récupère tous les produits dérivés d'une certaine catégorie.
- GET /pderive/license/:license : Récupère tous les produits dérivés d'une certaine licence.

### Authentification
Le backend prend en charge l'authentification des utilisateurs avec les fonctionnalités suivantes :

- POST /signup : Permet à un utilisateur de s'inscrire avec un nom d'utilisateur, une adresse e-mail et un mot de passe. Le mot de passe est crypté avant d'être enregistré dans la base de données.
- POST /login : Permet à un utilisateur de se connecter en vérifiant le nom d'utilisateur et le mot de passe fournis. Si les informations sont valides, un message de succès est renvoyé.

### Démarrage du serveur
Le backend écoute les requêtes sur le port spécifié dans le fichier de configuration config.js. Une fois démarré, le serveur affiche un message indiquant le port sur lequel il écoute.

## Frontend:
### Le frontend de pixelpalace comporte :

Header:

![imagehead](/images%20site/header.png)

![imagecon](/images%20site/connexion.png)

![imageinsc](/images%20site/inscription.png)

![imagecon](/images%20site/session.png)

![imagegame](/images%20site/games.png)

![imagegamedet](/images%20site/gamedetail.png)

![imagegoodies](/images%20site/goodies.png)

![imagegoodiesdet](/images%20site/goodiesdetail.png)

## Déploiement du site (lauching the website):

````npm run dev```` 
![imagegoodiesdet](/images%20site/term.png)

## Tests unitaires cypress 

````npm run test ````
![imagegoodiesdet](/images%20site/tests.png)
