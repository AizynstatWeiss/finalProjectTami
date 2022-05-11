import React, { useState } from "react";
import logo from './logo.svg';
import HomePage from './home/HomePage';
import Login from "./login/Login";
import SingUp from "./singup/SingUp"
import './App.css';
import {Route,Router} from 'react-router-dom';

// function setToken(userToken) {
  //sessionStorage.setItem('token', JSON.stringify(userToken));
  // }
  
  // function getToken() {
  // const tokenString = sessionStorage.getItem('token');
  // const userToken = JSON.parse(tokenString);
  // return userToken?.token
  // }
export function App() {
  
  // const [token, setToken] = useState(getToken());
  // const saveToken = userToken => {
  //   sessionStorage.setItem('token', JSON.stringify(userToken));
  //   setToken(userToken.token);
  // };
  //const token = getToken();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div className="App">
        <h1>app</h1>
        <h2>lev leachim its gonna start👍</h2>
        <Login/>
        
    </div>
  );
}
 <Router>
    <Route path="/" exact>
      <HomePage/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/singup">
      <SingUp/>
    </Route>
</Router> 
export default App;
