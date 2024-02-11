import {useState } from "react";
import {logIn} from "../../fb_setup/auth.js"
import "../../styles.css";
import LoginFailed from "./loginFailed.jsx";

import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isNotError , setIsNotError] = useState(true);

    return (
        <div className="login-container">
            {/* if login failed  */}
            {!isNotError && <LoginFailed />}

            {/* credentials  */}
            <h1 className="cred-title">LOGIN</h1>
            <br /><br />
            <input type="text" placeholder="email.." onInput={(e) => setEmail(e.target.value)} style={{width: "70%"}}/>
            <br /><br />
            <input type="password" placeholder="password.." onInput={(e) => setPassword(e.target.value)} style={{width: "70%"}}/>
            <br /><br />
            {/* submit */}
            <button className="auth-btn" onClick={() => logIn(email,password).then(v => {
                if(v){
                    setIsNotError(v);
                    navigate("/");
                }
                
            })}>LOGIN</button>
        </div>

    );
}

export default Login;