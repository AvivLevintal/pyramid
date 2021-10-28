import React, {createContext, useState, useEffect} from 'react'

export const SignUpContext = createContext();

export const SignUpProvider = (props) => {
    const [userToken, setUserToken] = useState();
    const [userEmail, setUserEmail] = useState();
   

    return (
        <SignUpContext.Provider value={{ tokenAuth: [userToken, setUserToken], emailAuth: [userEmail, setUserEmail]}}>
            {props.children}
        </SignUpContext.Provider>
    )
}
