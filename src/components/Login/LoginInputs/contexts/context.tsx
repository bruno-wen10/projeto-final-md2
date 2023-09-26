
import { ReactNode, createContext, useEffect } from "react";
import { useState } from "react";
import { UserProps } from "@/router/TypeRouter";
import {AuthContext, LoginProps, Children,LoggedUser } from "@/router/TypeRouter";
import { useNavigate } from "react-router-dom";


  export const ContextAuth = createContext<AuthContext>({
    authenticated: false,
    login: ({email, password, rememberMe}) => {},
    logout: () => {},
  });


  export const ProviderAuth = ({children}:Children)=>{
    const navigate = useNavigate()
    const [user, setUser] = useState<LoginProps | null >()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      const recoveredUser = localStorage.getItem("user")
      if(recoveredUser){
        setUser(JSON.parse(recoveredUser))
      }
      setLoading(false) //ajuda a controlar o efeito de carregar p/ que a aplicação espere o user ser autorizado para entrar na aplicação. 
    },[])

    const login =({email, password, rememberMe}:UserProps) =>{
      console.log  ('login', {email, password, rememberMe})

      // ir na API e criar um session
      const loggedUser = {
       id:'123',
       email,
       password,
       rememberMe,
      }
      localStorage.setItem('user', JSON.stringify(loggedUser))// o token será implementado
      if(password === 'senha'){
        setUser( loggedUser/* {id:'123', email, password, rememberMe} */)
        navigate('/')
      } else {
        /* setUser(null)
        navigate('/login') */
      }
    }
    const logout = () =>{
      console.log('logout')
      setUser(null)
      navigate('/login')
    }
    return(

//A notação !! é uma forma concisa de avaliar uma variável como um valor booleano.
      <ContextAuth.Provider value={{authenticated: !!user, user, login, logout}}>
        {children}
      </ContextAuth.Provider>
    )
  }
