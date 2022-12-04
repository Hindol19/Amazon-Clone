import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/layout/Home";
import Login from "./components/layout/Login";
import Checkout from "./components/layout/Checkout";
import Payment from "./components/layout/Payment";
import Orders from "./components/layout/Orders";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./components/layout/firebase";
import React, { useEffect, useState } from "react";
import { StateProvider, useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51MAaXVSH2lpDEHTizgiiMB443sZBR2QfzvTdVDaPMScO3t2ljPiZxRqv1BgCMNdUih0z6hDHRsDKZP4NTKzGnPul00sCY3B4VI"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("The use is: ", authUser);
      if (authUser) {
        //The user just logged in / was logged in
        //We will use dispatch to shoot data into the data-stream
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //User logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        <Routes>
          <Route
            path="/orders"
            element={
              <div>
                <Header />
                <Orders />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                <Login />
              </div>
            }
          />
          <Route
            path="/payment"
            element={
              <div>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />

          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
