//create a context
// Provider
// consumer => useContext hook

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { collection, doc, getDoc, getDocs, limit, orderBy, query, setDoc } from "firebase/firestore";

import arr from "../assets/data.json"

const { createContext, useContext, useState } = require("react");

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const createAuthUser = async(name1,name2, email, password) => {
        try{
            const userCredential = await createUserWithEmailAndPassword(auth,email,password)

            const userInfo = {
                uid:userCredential.user.uid,
                name1,
                name2,
                email,
                password,
                score:0,
                ansArray:[],
                time:"",
                status:true
            }

            await setDoc(doc(db, 'newRound', userCredential.user.uid),userInfo)

            return {user:userInfo ,error:""};

        } catch(error){
            return {user:"",error:error.message}
        }
    }

    const authVerification = async(email, password)=>{
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const uid = userCredential.user.uid
            const userInfo = await getDoc(doc(db, 'newRound', uid))
            if (userInfo.exists()) {
                return {user:userInfo.data(),error:""}
              } else {

                const userInfo = {
                    uid:userCredential.user.uid,
                    name1:"Participant - 1",
                    name2:"Participant - 2",
                    email,
                    password,
                    score:0,
                    ansArray:[],
                    time:"",
                    status:true
                }
    
                await setDoc(doc(db, 'newRound', userCredential.user.uid),userInfo)
    
                return {user:userInfo ,error:""};
              }
        } catch(error) {
            return {user:"",error:error.message}
        }
    }

    const getUser = () =>{
        if(Object.keys(user).length === 0)
            return ""
        return user;
    }

    const SubmitResponse = async(score, arr, time) =>{
        try{

            const userInfo = {
                uid:user.uid,
                name1:user.name1,
                name2:user.name2,
                email:user.email,
                password:user.password,
                score:score,
                ansArray:arr,
                time:time,
                status:false
            }

            const data = await setDoc(doc(db,"newRound",user.uid),userInfo)
            return {data:data,error:""}
        } catch(error) {
            return {data:"",error:error.message}
        }
    }


    const getAllScore = async () => {
        const query1 = query(collection(db, "newRound"), orderBy('score',"desc"));
        let ans = [];
    
        try {
            const snapshot = await getDocs(query1);
    
            snapshot.forEach((doc) => {
                ans.push(doc.data());
            });
        } catch (error) {
            // Handle any potential errors here.
            console.error("Error fetching scores:", error);
        }
    
        return ans;
    };

    return <AuthContext.Provider value={{createAuthUser , authVerification, setUser, getUser, SubmitResponse, getAllScore, createUserNow}}>{children}</AuthContext.Provider>
}

// Custom Hook
const useAuthContext = () =>{
    return useContext(AuthContext)
}

export {AuthProvider , AuthContext , useAuthContext};