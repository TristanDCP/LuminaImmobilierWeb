import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/web/home';
import About from './components/pages/web/about';
import LogIn from './components/pages/web/login';
import Properties from './components/pages/web/properties';
import Profile from './components/pages/web/profile';
import PropertyDetails from './components/pages/web/propertyDetail';
import SignUp from './components/pages/web/signup';
import Admin from './components/pages/web/admin';

import loginDesktop from './components/pages/desktop/loginDesktop';
import addPropertyDesktop from './components/pages/desktop/addPropertyDesktop';
import homeDesktop from './components/pages/desktop/homeDesktop';
import statsDesktop from './components/pages/desktop/statsDesktop';
import updatePropertyDesktop from './components/pages/desktop/updatePropertyDesktop';
import propertyListDesktop from './components/pages/desktop/propertyListDesktop';

import appartmentStateMobile from './components/pages/mobile/appartmentStateMobile';
import homeMobile from './components/pages/mobile/homeMobile';
import loginMobile from './components/pages/mobile/loginMobile';
import planningMobile from './components/pages/mobile/planningMobile';
import registerMobile from './components/pages/mobile/registerMobile';

function App() {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/about' component={About} />
				<Route path='/login' component={LogIn} />
				<Route path='/properties' component={Properties} />
				<Route path='/profile' component={Profile} />
				<Route path='/property/:id' component={PropertyDetails} />
				<Route path='/signup' component={SignUp}/>
				<Route path='/admin' component={Admin}/>

				<Route path='/loginDesktop' component={loginDesktop}/>
				<Route path='/addPropertyDesktop' component={addPropertyDesktop}/>
				<Route path='/homeDesktop' component={homeDesktop}/>
				<Route path='/statsDesktop' component={statsDesktop}/>
				<Route path='/updatePropertyDesktop' component={updatePropertyDesktop}/>
				<Route path='/propertyListDesktop' component={propertyListDesktop}/>

				<Route path='/appartmentStateMobile' component={appartmentStateMobile}/>
				<Route path='/homeMobile' component={homeMobile}/>
				<Route path='/loginMobile' component={loginMobile}/>
				<Route path='/planningMobile' component={planningMobile}/>
				<Route path='/registerMobile' component={registerMobile}/>
			</Switch>
		</Router>
	);
}


export default App;
