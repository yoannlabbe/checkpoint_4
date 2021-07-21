import './App.css';
import React, { useEffect, useState } from "react";
import Search from './Components/Alimentation/Search';
import AlimentList from './Components/Alimentation/AlimentList';
import Barrenav from './Components/Navigation/Barrenav';
import Propos from './Components/Navigation/Propos';
import Main from './Components/Navigation/Main';
import Ajout from './Components/Navigation/Ajout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



const aliment = [
  {
    id: "1",
    name: "Pates",
    autorisation: "OUI",
    description: "Convient aux femmes enceintes",
  },
  {
    id: "2",
    name: "Pates à tartiner",
    autorisation: "OUI",
    description: "Avec modération",
  },
  {
    id: "3",
    name: "Sushis",
    autorisation: "NON",
    description: "Ne convient pas à la femmes enceinte car il est cru et présente donc un risque de listériose.",
  },
];

const fakeApi = (keyword) => {
  return aliment.filter((aliment) =>
    aliment.name.toLowerCase().includes(keyword.toLowerCase())
  );
};

export default function App() {
  const [aliments, setAliments] = useState([]);

  useEffect(() => {
    const apiAliment = fakeApi("");
    setAliments(apiAliment);
  }, []);

  const doSearch = async (keyword) => {
    // ici faire la requête axios
    console.log(keyword);
    const apiAliment = fakeApi(keyword);
    setAliments(apiAliment);
  };

  return (
    <div>
    <Router>
    <Main />
      <Switch>
    
        <Route exact path="/propos" component={Propos} />
        <Route exact path="/alimentation" render={(matchProps) => <Search {...matchProps} />} />
   {/*  <Route exact path="/alimentation" component={AlimentList} />
        <Route exact path="/ajout" component={Ajout} /> */}

      </Switch>
    </Router>
    </div>
  );
}

