
import React from 'react'
import { useState, useContext} from 'react';
import rectangleCopy from '../imgs/RectangleCopy.png'
import rectangle from '../imgs/Rectangle.png'
import { useHistory } from "react-router-dom";
import MainPage from './MainPage';
import SignUp from './SignUp';
import { SignUpContext } from './SignUpContext';

const Login  = () => {

    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();

    const {tokenAuth, emailAuth} = useContext(SignUpContext);
    const [userToken, setUserToken] = tokenAuth;
    const [userEmail, setUserEmail] = emailAuth;

    let history = useHistory();



    
        const loginRequest = async() =>{
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            var raw = JSON.stringify({
              "user": {
                "email": "test10@test.com",
                "password": "12345678"
              }
            });
            
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            
           const response = await fetch("https://not-a-pyramid.herokuapp.com/api/v1/login", requestOptions);
            
            return response.text();
    }

    const handleLogin = () =>{
        alert("test")
        const resp = loginRequest();
        setUserEmail(resp);
        console.log(resp);
        

        //setUserEmail(response.user.email);
       // setUserToken(response.auth_token);
        
    
    }

    
    return (
            <div /*className="screen-login"*/>
                {/* <label className="definitely-not-label">
                    DefinitelyNotA<br />
                    PyramidScheme
                </label>
    */}
                <form className="form" >


                    <div src={rectangleCopy} className="rectangle-signup-box">
                        <h2 className="sign-up-for-free">
                            Login
                        </h2>
                        <label className="">
                            See, we told you 
                        it’s not a pyramid scheme.
                        </label>


                        
                        <input type="text"placeholder="Email..." src={rectangleCopy} className="username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password..." src={rectangleCopy} className="username" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        
                        
         
                        
                        <input type="button" onClick={handleLogin} value="enter ->" name="Enter" className="enter-submit"/>
                    </div>
                    {/* <img src={rectangle} className="rectangle"/> */}
                    
                </form>
            </div>

    )
    
}

export default Login

