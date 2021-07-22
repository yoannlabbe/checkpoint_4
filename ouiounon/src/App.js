import './App.css';
import React from "react";
import Search from './Components/Alimentation/Search';
import AlimentList from './Components/Alimentation/AlimentList';

import Propos from './Components/Navigation/Propos';
import Main from './Components/Navigation/Main';
import Ajout from './Components/Add/Ajout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {
  
  

  return (
    <div>
    <Router>
    <Main />
      <Switch>
    
        <Route exact path="/propos" component={Propos} />
        {/* <Route exact path="/alimentation" render={(matchProps) => <SearchBar {...matchProps} />} />  */}
        <Route exact path="/alimentation" component={AlimentList} />
        <Route exact path="/ajout" component={Ajout} /> 
      <Search />
    
      </Switch>
    </Router>
    </div>
  );
}

