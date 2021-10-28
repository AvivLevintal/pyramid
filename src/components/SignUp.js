
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

    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    let history = useHistory();


    
    function signUpRequest(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = "{\n    \"user\": {\n        \"email\": \"tsta2@tesst.com\",\n        \"password\": \"12a3a45678\",\n        \"name\": \"Jahnaa Doae\"\n    }\n}";

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://not-a-pyramid.herokuapp.com/api/v1/users", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    } 

    const handleSignUp = () =>{

        const resp = signUpRequest();
        if(resp === "\"error\": \"Email has already been taken\"")
        {
            alert("Mail or name are already in use");
        }
        else{
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


                        <input type="text" placeholder="Username..." src={rectangleCopy} className="username" value={user} onChange={(e) => setUser(e.target.value)}/>
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

