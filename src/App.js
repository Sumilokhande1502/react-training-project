import "./App.css";
import "./Style.scss";
import React from "react";
import Loader from 'react-loader-spinner';
import Navbar from './Navbar';
import Addcake from "./Addcake";
import Login from "./Login";
import Signup from "./Signup";
import Search from "./Search";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Cakedetails from "./Cakedetails";
import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function App (){
  let [searchtext, setSearchtext] = useState("");
  let function1 = function (searchstring) {
    setSearchtext(searchstring);
  };
  useEffect(() => {}, []);

  // eslint-disable-next-line no-undef
  // state = {
  //   loading: true,
  // };
  // componentDidMount() {
  //   this.fakeRequest().then(() => {
  //     const el = document.querySelector(".loader-container");
  //     if (el) {
  //       el.remove(); // removing the spinner element
  //       this.setState({ loading: false }); // showing the app
  //     }
  //   });
  // }

  // fakeRequest = () => {
  //   return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  // };
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 6000));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    if (isLoading) {
      return <div style={style}>
        <Loader
      className="d-flex flex-direction-column"
      type="TailSpin"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={10000} 
    /> 
    <p className="text-center">Loading...</p>
        </div> //app is not ready (fake request is in process)  
    }
    return (
      <div className="App">
        <Router>
        <Navbar fun={function1}>Cakes Gallary</Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/search" exact component={Search} />
            <Route path="/addcake" exact component={Addcake} />
            <Route path="/cake/:cakeid" exact component={Cakedetails} />
            {/* <Route path="**">
              <Redirect to="/"></Redirect>
            </Route> */}
          </Switch>
        </Router>
      </div>
    );

}

export default App;
