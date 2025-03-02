import { createContext, useContext, useEffect, useState } from "react"
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
import axios from "axios";

const FirebaseContext = createContext()

const firebaseConfig = {
  apiKey: "AIzaSyAxKA2OcGXGmGIXCg0OsFep52j3efYV53k",
  authDomain: "shaktimudra-9aa9f.firebaseapp.com",
  projectId: "shaktimudra-9aa9f",
  storageBucket: "shaktimudra-9aa9f.firebasestorage.app",
  messagingSenderId: "646521050172",
  appId: "1:646521050172:web:7f311ee296786329675f39",
  databaseURL:"https://shaktimudra-9aa9f-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp)
export const firebaseAuth = getAuth(firebaseApp)

export const useFirebase = ()=> useContext(FirebaseContext)

export const FirebaseProvider=({children})=>{

  
  function putData(key,data){
    set(ref(database,key),data)
  }
  
  function registerUser(email,password){
    return createUserWithEmailAndPassword(firebaseAuth,email,password)
  }
  
  function loginUser(email,password){
    return signInWithEmailAndPassword(firebaseAuth,email,password)
  }
  
  async function logout(){
    await signOut(firebaseAuth)
  }
  
  const [userList,setUserList] = useState([])
  useEffect(()=>{
    async function fetchUsers(){
      try {
        let res = await axios.get("https://shaktimudra-9aa9f-default-rtdb.asia-southeast1.firebasedatabase.app/users.json")
        setUserList(res.data || [])
      } catch (err) {
        console.log(err)
      }
    }
    fetchUsers()
  },[])

  return (
    <FirebaseContext.Provider value={{registerUser,putData,loginUser,logout,userList}}>
      {children}
    </FirebaseContext.Provider>
  )
}

