import React from 'react'
import SignUp from './SignUp'
import '../LoginPage.css'
import bg_grid from '../imgs/bg-grid.svg'

const LoginPage = () => {
    return (
        <body className="screen-login">  
        <label className="definitely-not-label">
        DefinitelyNotA
        PyramidScheme
        </label>
        <label className="definitely-not-label">
         ™
        </label>
            <SignUp />            
            <img src={bg_grid} className="bg-grid" />
        </body>
    )
}

export default LoginPage


