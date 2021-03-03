import React from 'react';
import ReactDOM from 'react-dom';
import { getLastPropertyToRent } from '../../api/luminaAPI'

class LastPropertyToRent extends Component {
    constructor (props) {
      super(props)
      this.state = { loginState: 'logged-out' }
    }

    // ComponentDidMount() {
    //     getLastPropertyToRent() => { 
    // Créer la fonction qui récupere les données dans l'api et apeller le resultat ici
            
    //     }
        
    // }
  
    render () {
      return (
          <p>Dernières propriétés à louer</p>
      );
    }
}

export default LastPropertyToRent;