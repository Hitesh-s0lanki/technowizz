//create a context
// Provider
// consumer => useContext hook

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { doc, setDoc } from "firebase/firestore";

const { createContext, useContext, useState } = require("react");

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [name,setName] = useState("")

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

    const SubmitResponse = async(score, arr) =>{
        try{
            const data = await setDoc(doc(db,"user",user.uid),{
                name:user.displayName || name || user.email,
                email:user.email,
                score:score,
                ansArray:arr
            })
            return {data:data,error:""}
        } catch(error) {
            return {data:"",error:error.message}
        }
    }

    return <AuthContext.Provider value={{createAuthUser , authVerification, setUser, getUser, SubmitResponse, setName}}>{children}</AuthContext.Provider>
}

// Custom Hook
const useAuthContext = () =>{
    return useContext(AuthContext)
}

export {AuthProvider , AuthContext , useAuthContext};