import React, {useEffect} from "react";
import "./App.css";
import Header from './Header';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import{ auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";


const promise = loadStripe('pk_test_51NdqWwSFLnJmaw1bN0Zt3W0JDGTWL8Aututp2va8KTMCctkcZf4Iq0zz4VQimY0kR02P9PNRS4X02dP62e3isuNA003bKou1RN');

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })
  }, []);
return (
  <Router>

 
  <div className="app">
  
    <Switch>
    <Route path="/Orders">
      <Header />
      <Orders />  
    </Route>
    <Route path="/login">
    <Login/>
    </Route>
    <Route path="/Checkout">
    <Header />
    <Checkout />
    </Route>
    <Route path="/payment">
    <Header />
    <Elements stripe={promise}> 
    <Payment />
    </Elements>
  
    </Route>
    <Route path="/">
    <Header />
    < Home />
    </Route>
    </Switch>
    
  </div>
  </Router>
);
}
export default App;