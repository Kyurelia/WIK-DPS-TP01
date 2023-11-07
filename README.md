# WIK-DPS-TP01

Réalisation d'une API en **typescript** qui retourne au format JSON les headers de la requête quand il y a une requête HTTP GET sur */ping* et uniquement sur */ping*.
Le serveur doit écouter sur un port configurable via une variable d'envrionnement, ici la variable *port*.

# Prérequis 

Une version LTS de node-js > 18.13. 

# Installation 

Après clonage du repository, lancer la commande *npm install* à la racine du projet qui installera les *node_modules* nécéssaire au fonctionnement de l'API.
Pour finir, s'il y a besoin de modifier le code source, utiliser la commande *npx tsc* pour que typescript compile notre code en javascript.

# Fonctionnement

Lancer la commande **npm start** pour lancer le serveur local sur le port défini ici il est défini sur le port *3000* et pour finir aller sur l'url suivante : **http://localhost:3000/ping** pour afficher les headers de la requête et/ou afficher une erreur 404 sur n'importe quel autre route que */ping*.
