import {createContext ,useContext, ReactNode, useEffect, useState} from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useSignup } from '../hooks/useSignup';
import { useSignin } from '../hooks/useSignin';


const AuthContext = createContext<any>({})

export const useAuth = () => useContext(AuthContext)

type User = {
    uid: string;
    email: string | null;
    password?: string | null;
}

export const AuthContextProvider = ({children} : {children: ReactNode}) => {

    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(
                    {
                        uid: user.uid,
                        email: user.email,
                    }
                )
            }else{
                setUser(null)
            }
        })
        return () => unsubscribe()
    }, [])


    const logout = async () => {
        setUser(null)
        await signOut(auth)
    }
    

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
