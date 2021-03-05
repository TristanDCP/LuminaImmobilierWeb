export default class User {
    // 1. Typage des propiétés d'un utilisateur
    id: number;
    mail: string;
    password: string;
    
    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
     id: number,
     mail: string = 'mail',
     password: string = 'mot de passe',
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.id = id;
     this.mail = mail;
     this.password = password;
    }
   }