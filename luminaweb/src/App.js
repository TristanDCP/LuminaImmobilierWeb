import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/template/navbar';
import Home from './components/pages/home';
import About from './components/pages/about';
import LogIn from './components/pages/login';
import Properties from './components/pages/properties';
import Profile from './components/pages/profile';
import PropertyDetails from './components/pages/propertyDetail';
import SignUp from './components/pages/signup';
import Appointment from './components/pages/dashboard/appointment';
import Document from './components/pages/dashboard/document';
import Settings from './components/pages/dashboard/settings';


function App() {
	return (
		<Router>
			<Switch>
				<Route path='/profile' component={Profile} />
				<Route path='/dashboard/appointment' component={Appointment} />
				<Route path='/dashboard/document' component={Document} />
				<Route path='/dashboard/settings' component={Settings} />
				<div>
					<Navigation />
					<Route path='/' exact component={Home} />
					<Route path='/about' component={About} />
					<Route path='/login' component={LogIn} />
					<Route path='/properties' component={Properties} />
					<Route path='/property/:id' component={PropertyDetails} />
					<Route path='/signup' component={SignUp} />
				</div>
			</Switch>
		</Router>
	);
}


export default App;
