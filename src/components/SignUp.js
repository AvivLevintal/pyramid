
import React from 'react'
import { useState } from 'react';
import rectangleCopy from '../imgs/RectangleCopy.png'
import rectangle from '../imgs/Rectangle.png'
import { useHistory } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MainPage from './MainPage';


const SignUp = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [errorCaught, setErrorCaught] = useState();
    let history = useHistory();


    
    function signUpRequest(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = `{\n    \"user\": {\n        \"email\": \"${email}\",\n        \"password\": \"${password}\",\n        \"name\": \"${name}\"\n    }\n}`;

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://not-a-pyramid.herokuapp.com/api/v1/users", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => setErrorCaught(error));

    } 

    const handleSignUp = () =>{
            alert(email);
            if(typeof email === "undefined" || email <= 6){
                alert("Email must be 6 characters long!")
            }
            else if(typeof password === "undefined" || password <= 6){
                alert("Password must be longer than 6 characters!")
            }
            else{

                const resp = signUpRequest();
                history.push('/')
            
            }
      


    }

    
    return (
            
            <div className="screen-login">
                {/* <label className="definitely-not-label">
                    DefinitelyNotA<br />
                    PyramidScheme
                </label>
    */}
                <form className="form"  onSubmit={handleSignUp}>


                    <div src={rectangleCopy} className="rectangle-signup-box">
                        <h2 className="sign-up-for-free">
                            Sign Up for Free
                        </h2>
                        <label className="">
                            See, we told you 
                        it’s not a pyramid scheme.
                        </label>


                        <input type="text"placeholder="Email..." src={rectangleCopy} className="username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password..." src={rectangleCopy} className="username" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <input type="text" placeholder="Your name..." src={rectangleCopy} className="username" value={name} onChange={(e) => setName(e.target.value)}/>
                        
                        <input type="submit" value="enter ->" name="Enter" className="enter-submit"/>
                    </div>
                    {/* <img src={rectangle} className="rectangle"/> */}
                    
                </form>
            </div>
      
    )
    
}

export default SignUp

