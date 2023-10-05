
import { ReactNode, createContext, useEffect } from "react";
import { useState } from "react";
import { UserProps } from "@/router/TypeRouter";
import {AuthContext, LoginProps, Children,LoggedUser } from "@/router/TypeRouter";
import { useNavigate } from "react-router-dom";
import { ApiLogin } from "@/api/Api-login";

  export const ContextAuth = createContext<AuthContext>({

    login: ({}) => {},
    logout: () => {},
  });


  export const ProviderAuth = ({children}:Children)=>{
    const navigate = useNavigate()
    const [user, setUser] = useState<LoginProps | null >()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{ // useEffect funciona de forma asincrona, ou seja, irá verificar se há algum usuario, para depois renderizar o restante da pagina com o loggin autorizado.
      const recoveredUser = localStorage.getItem("token") // localStorage vai guardar o obj do usuario na memoria permanente
      // verifica se exite algum registro no usuario. o if verifica se há algum dado deusuario registrádo
      if(recoveredUser){
        setUser(JSON.parse(recoveredUser))
      }
      setLoading(false) //ajuda a controlar o efeito de carregar p/ que a aplicação espere o user ser autorizado para entrar na aplicação.
    },[])

    const login = async ({email, password }:UserProps) =>{



      // ir na API e criar um session
      const loggedUser = {
       email,
       password,
      }

      localStorage.setItem('token', JSON.stringify(loggedUser))// o token será implementado
      if(password === password){
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
      <ContextAuth.Provider value={{ user, login, logout}}>
        {children}
      </ContextAuth.Provider>
    )
  }
function fetchRequest() {
  throw new Error("Function not implemented.");
}

