
import React from 'react'
import { useState } from 'react';
import rectangleCopy from '../imgs/RectangleCopy.png'
import rectangle from '../imgs/Rectangle.png'
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



    
    async function signUpRequest(){
        const { data } = await fetch('http://not-a-pyramid.herokuapp.com:3000/api/v1/users', {
            method: 'POST',
            
            body: 
                JSON.stringify({
                user: user,
                email: email,
                password: password,
                name: name
                })
            })

    }





    
    return (
            
            <div className="screen-login">
                {/* <label className="definitely-not-label">
                    DefinitelyNotA<br />
                    PyramidScheme
                </label>
    */}
                <form className="form">


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
                        
                        <input type="button" onClick="location.href = 'http://www.google.com'" value="enter ->" name="Enter" className="enter-submit"/>
                    </div>
                    {/* <img src={rectangle} className="rectangle"/> */}
                    
                </form>
            </div>
      
    )
    
}

export default SignUp

