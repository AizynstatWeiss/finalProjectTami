import React from "react";//, { useState }
//import App from "./App";
import "./Login.css"
import { useHistory } from "react-router-dom";
//import PropTypes from 'prop-types';

export function Login() {
    //const history=useHistory();

    function login() {
        debugger;
    // var email = document.getElementById("email").value;
    // var password = document.getElementById("password").value;

    // fetch('/api/user/?' + password + '/' + email).then
    //     (res => {
    //         if (res.ok && res.status == 200)
    //             return res.json();
    //         alert("Your name or your password doesn't exist in the System,let us know u & regist to our System:)");
    //         load();
    //     }).then(res => {
    //             if(res)
    //             {
    //             alert("Hello " + res.firstName);
    //             sessionStorage.setItem("user", JSON.stringify(res));
    //             window.location.href = "../htmlPages/updateUser.html"
    //             }
    //     });        

    
        //     history.push("/login");
    }
    function register() {
        debugger;
        // history.push("/singup");
    }
    const switchers = [...document.querySelectorAll('.switcher')]

    switchers.forEach(item => {
        item.addEventListener('click', function () {
            switchers.forEach(item => item.parentElement.classList.remove('is-active'))
            this.parentElement.classList.add('is-active')
        })
    })
    
    return (
        <section class="forms-section">
  <h1 class="section-title">Animated Forms</h1>
  <div class="forms">
    <div class="form-wrapper is-active">
      <button type="button" class="switcher switcher-login">
        Login
        <span class="underline"></span>
      </button>
      <form class="form form-login">
        <fieldset>
          <legend>Please, enter your email and password for login.</legend>
          <div class="input-block">
            <label for="login-email">E-mail</label>
            <input id="login-email" type="email" required/>
          </div>
          <div class="input-block">
            <label for="login-password">Password</label>
            <input id="login-password" type="password" required/>
          </div>
        </fieldset>
        <button type="submit" class="btn-login" onClick={login}>Login</button>
      </form>
    </div>
    <div class="form-wrapper">
      <button type="button" class="switcher switcher-signup">
        Sign Up
        <span class="underline"></span>
      </button>
      <form class="form form-signup">
        <fieldset>
          <legend>Please, enter your email, password and password confirmation for sign up.</legend>
          <div class="input-block">
            <label for="signup-email">E-mail</label>
            <input id="signup-email" type="email" required/>
          </div>
          <div class="input-block">
            <label for="signup-password">Password</label>
            <input id="signup-password" type="password" required/>
          </div>
          <div class="input-block">
            <label for="signup-password-confirm">Confirm password</label>
            <input id="signup-password-confirm" type="password" required/>
          </div>
        </fieldset>
        <button type="submit" class="btn-signup" onClick={register}>Continue</button>
      </form>
    </div>
  </div>
</section>
    )
}
  
     {/*        <button className="loginButton" onClick={login}>התחברות</button>
             <button className="registerButton" onClick={register}>רישום</button>
         </div> */}





// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/Login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
//    }
// export function Login({ setToken }) {
//     const [username, setUserName] = useState();
//     const [password, setPassword] = useState();

//     const handleSubmit = async e => {
//         e.preventDefault();
//         const token = await loginUser({
//           username,
//           password
//         });
//         setToken(token);
//       }

//     return (
//         <div className="login-wrapper">
//       <h1>Please Log In</h1>
//         <form onSubmit={handleSubmit}>
//             <label>
//                 <p>Username</p>
//                 <input type="text" onChange={e => setUserName(e.target.value)}/>
//             </label>
//             <label>
//                 <p>Password</p>
//                 <input type="password" onChange={e => setPassword(e.target.value)}/>
//             </label>
//             <div>
//                 <button type="submit">Submit</button>
//             </div>
//         </form>
//     </div>
//     )
// }
// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   }

export default Login;