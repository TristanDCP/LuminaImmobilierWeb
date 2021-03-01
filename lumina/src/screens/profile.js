import React from 'react';
import ReactDOM from 'react-dom';

class Profile extends Component {
    constructor (props) {
      super(props)
      this.state = { loginState: 'logged-in' }
    }
  
    render () {
      return (
          <p>Profil de l'utilisateur</p>
      );
    }
}

export default Profile;