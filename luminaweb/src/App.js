import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import LogIn from './components/pages/login';
import Properties from './components/pages/properties';
import Profile from './components/pages/profile';
import SignUp from './components/pages/signup';


function App() {
return (
	<Router>
	<Navigation />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/login' component={LogIn}/>
		<Route path='/properties' component={Properties}/>
		<Route path='/profile' component={Profile}/>
		<Route path='/signup' component={SignUp}/>
	</Switch>
	</Router>
);
}

export default App;
