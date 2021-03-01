import React from 'react';
import ReactDOM from 'react-dom';

class Logout extends Component {
    constructor (props) {
      super(props)
      this.state = { loginState: 'logged-in' }
    }
  
    render () {
      return (
          <p>Se déconnecter</p>
      );
    }
}

export default Logout;