import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import List from './pages/list';
import PageNotFound from './pages/page-not-found';

function App() {
  return (
    <Router>
    <div>
        {/* La barre de navigation commune à toutes le pages*/}
       <nav>
           <div>
               <Link to="/">Lumina Immobilier</Link>
           </div>
       </nav>
       {/* Le système de gestion des routes de notre application */}
       <Switch>
           <Route exact path="/" component={List} />
           <Route component={PageNotFound} />
       </Switch>
    </div>
</Router>
  );
  
}

export default App;
