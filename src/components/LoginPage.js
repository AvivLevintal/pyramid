import React from 'react'
import SignUp from './SignUp'
import { useContext } from 'react'
import '../LoginPage.css'
import bg_grid from '../imgs/bg-grid.svg'
import Login from './Login'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { SignUpContext } from './SignUpContext'
import MainPage from './MainPage'


const LoginPage = () => {


    return (
        <Router>


        <div className="screen-login">  
               <Link type="button" to="/SignUp" className="signup-link">Sign up for free</Link>
                        <Switch>
                            <Route exact path="/">
                                <Login />
                            </Route>
                            <Route exact path="/SignUp">
                                <SignUp />
                            </Route>
                            <Route exact path="/Home">
                                <MainPage />
                            </Route>
                        </Switch>

        </div>
        </Router>
    )
}

export default LoginPage


