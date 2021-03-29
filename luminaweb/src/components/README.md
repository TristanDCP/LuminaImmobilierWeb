# Comment modifier la barre de navigation ? 

La navbar est facilement modifiable. 

## Etape 1 : 

- Créer une page dans le dossier components/pages

## Etape 2 :

- Importer la page dans le App.js et ajouter sa route en mettant entre crochet le export de la page crée.

Exemple : (App.js) "path='/login' component={LogIn}" =>  (Login.hs) "export default LogIn";

## Etape 3 : 

- Dans components/Navbar/index.js, ajouter le lien de la page.

## Modification graphique : 

- Bootstrap étant installé, il suffit de rajouter des classes bootstraps aux pages. Si vous modifiez directement la navbar, il faut utiliser className, si vous modifiez une page, les classes bootstrap basiques suffisent.