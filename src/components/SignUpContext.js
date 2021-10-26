import React, {createContext, useState, useEffect} from 'react'

export const SignUpContext = createContext();

export const SignUpProvider = (props) => {
    const [signupVisable, setSignupVisable] = useState();
    setSignupVisable(false);

    return (
        <SignUpProvider.Provider value={[signupVisable, setSignupVisable]}>
            {props.children}
        </SignUpProvider.Provider>
    )
}
