import React from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {
    constructor (props) {
      super(props)
      this.state = { loginState: 'logged-out' }
    }
  
    render () {
      return (
          <p>Se connecter</p>
      );
    }
}

export default Login;