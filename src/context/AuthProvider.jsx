import { createContext, useContext, useEffect, useState } from 'react'
import { firebaseAuth } from './Firebase'
import { onAuthStateChanged, signOut } from "firebase/auth"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({children}) {
  const [user,setUser] = useState(null)

    async function logout(){
      await signOut(firebaseAuth)
    }

  useEffect(()=>{
    const login = onAuthStateChanged(firebaseAuth,(loggedUser)=>{
      setUser(loggedUser)
    })
    return ()=>login()
  },[])

  return (
    <AuthContext.Provider value={{user,logout}}>
      {children}
    </AuthContext.Provider>
  )
}

