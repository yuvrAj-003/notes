import { auth } from "./config";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut} from "firebase/auth";

// register
const createAccount = async(email, password) =>{
    try{
        await createUserWithEmailAndPassword(auth , email, password);
        window.location.href = "/";
        return true;
    }
    catch(e){
        return false;
    }
    
}

// login
const logIn = async(email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email,password);
        window.location.href = "/";
        return true;
    }
    catch(e){
        return false;
    }
    
}

// logout
const logOut = async() => {
    try{
        await signOut(auth);
        window.location.reload();
    }
    catch(e){
        return "error incurred";
    }
    
}


export {createAccount, logIn, logOut}
