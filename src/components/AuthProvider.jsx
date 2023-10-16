import { createUserWithEmailAndPassword } from "firebase/auth"
import { createContext } from "react"
import auth from "../firebase.config"

export const AuthContext = createContext(null)

export default function AuthProvider({children}) {


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email , password)
    }

    const userInfo = {
        createUser
    }
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}
