import React, { useState } from "react";
import Login from "../../components/Login/LoginForm";


interface LoginScreenProps {
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
    loggedin : boolean
}
    

const LoginScreen =({setAuth,loggedin} : LoginScreenProps) => {
    return (
        < div>
        <Login setAuth={setAuth} loggedin = {loggedin}/>

        </div>)
}
export default LoginScreen;