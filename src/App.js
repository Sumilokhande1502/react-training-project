import "./App.css";
import Loader from "react-loader-spinner";
import Addcake from './Addcake';
import Login from "./Login";
import Signup from'./Signup';
import Search from "./Search";
import Home from './Home';
import Dashboard from './Dashboard';
import Cakedetails from'./Cakedetails';
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

function App() {

  return (
    <div className="App">
     <Router>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/search" exact component={Search}/>
          <Route path="/addcake" exact component={Addcake}/>
          <Route path="/cake/:cakeid" exact component={Cakedetails}/>
          <Route path="**"><Redirect to="/"></Redirect></Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
