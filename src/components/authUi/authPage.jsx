import Login from "./login.jsx";
import Register from "./register.jsx";
import "../../styles.css"
import { useState } from "react";
function AuthPage(){
    let [authType , setAuthType] = useState("login")
    return (
        <div>
            <div className="auth-container">
            <div className="select-auth">
                <button onClick={() => setAuthType("register")}>REGISTER</button> / <button onClick={() => setAuthType("login")}>LOGIN</button>
            </div>
            

            {authType == "login" ? <Login/> : <Register />}
            {/* <LoginFailed /> */}
            </div>
        </div>
        
    );
}

export default AuthPage;