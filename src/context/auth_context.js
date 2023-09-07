//create a context
// Provider
// consumer => useContext hook

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const { createContext, useContext, useState } = require("react");

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const createAuthUser = async(name, email, password) => {
        try{
            const userCredential = await createUserWithEmailAndPassword(auth,email,password)
            return {user:userCredential.user,error:""};
        } catch(error){
            return {user:"",error:error.message}
        }
    }

    const authVerification = async(email, password)=>{
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            return {user:userCredential.user,error:""};
        } catch(error) {
            return {user:"",error:error.message}
        }
    }

    const getUser = () =>{
        if(Object.keys(user).length === 0)
            return ""
        return user;
    }


    return <AuthContext.Provider value={{createAuthUser , authVerification, setUser, getUser}}>{children}</AuthContext.Provider>
}

// Custom Hook
const useAuthContext = () =>{
    return useContext(AuthContext)
}

export {AuthProvider , AuthContext , useAuthContext};