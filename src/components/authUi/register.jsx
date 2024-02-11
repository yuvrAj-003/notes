import "../../styles.css";
import {createAccount} from "../../fb_setup/auth.js"
import { useState } from "react";
import LoginFailed from "./loginFailed.jsx";

function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isNotError , setIsNotError] = useState(true);
    
    return (
    <div className="register-container">
        {/* if login failed  */}
        {!isNotError && <LoginFailed />}

        {/* credentials  */}
        <h1 className="cred-title">REGISTER</h1>
        <br /><br />
        <input type="text" placeholder="email.." onInput={(e) => setEmail(e.target.value)} style={{width: "70%"}}/>
        <br /><br />
        <input type="password" placeholder="password.." onInput={(e) => setPassword(e.target.value)} style={{width: "70%"}}/>
        <br /><br />
        
        {/* submit */}
        <button className="auth-btn" onClick={() => createAccount(email,password).then((v) => setIsNotError(v))}>REGISTER</button>
    </div>
    );
}

export default Register;