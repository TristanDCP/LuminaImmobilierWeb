import React from 'react';
import ReactDOM from 'react-dom';

class Register extends Component {
    constructor (props) {
      super(props)
      this.state = { loginState: 'logged-in' }
    }
  
    render () {
      return (
          <p>S'inscrire</p>
      );
    }
}

export default Register;