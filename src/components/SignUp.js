
import React from 'react'
import rectangleCopy from '../imgs/RectangleCopy.png'
import rectangle from '../imgs/Rectangle.png'

const SignUp = () => {
    return (
        <div className="screen-login">
            <label className="definitely-not-label">
                DefinitelyNotA<br />
                PyramidScheme
            </label>

            <form className="form">


                <div src={rectangleCopy} className="rectangle-signup-box">
                    <h2 className="sign-up-for-free">
                        Sign Up for Free
                    </h2>
                    <label className="">
                        See, we told you 
                    it’s not a pyramid scheme.
                    </label>


                    <input placeholder="Username..." src={rectangleCopy} className="username"/>
                    <input type="button" value="Google Auth" name="Google Auth" className="google-auth" />
                    <input type="submit" value="enter ->" name="Enter" className="enter-submit"/>

                </div>
                {/* <img src={rectangle} className="rectangle"/> */}
            </form>
        </div>
    )
}

export default SignUp

