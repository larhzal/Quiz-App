# Instruction d'installation et d'execution


Ce fichier contient une application web developpée avec Laravel (Back end) et React (Front end)


Assurez-vous d'avoir installé les outils suivants sur votre machine :
- Xampp
- Composer 
- Node.js 
- npm 
- IDE (vs code, intelj...)



1. Clonez ce dépôt sur votre machine en utilisant la commande suivante :
   ```sh
   git clone https://github.com/votre-utilisateur/nom-du-depot.git


2-Accédez au répertoire du projet :
cd nom-du-depot


3-Installez les dépendances PHP en exécutant la commande suivante :
composer install



4-Créez une base de donées



5-Configurez les informations de base de données dans le fichier .env



6-Exécutez les migrations pour créer les tables de base de données:
php artisan migrate



7-Installez les dépendances JavaScript en exécutant la commande suivante :
npm install


Exécution

Une fois l'installation terminée, vous pouvez démarrer l'application en utilisant les commandes suivantes :

Pour démarrer le serveur Laravel (backend) :
php artisan serve



Pour démarrer le serveur de développement React (frontend) :
npm start

Cette application ulilise vite danc il faut l'installer:
npm install vite


Cette commande va créer un projet React dans le projet laravel, il faut accéder ce répertoir:
cd quiz_front

Puis executer:
npm run dev









