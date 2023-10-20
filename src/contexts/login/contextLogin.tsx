//PARA VALIDAR ACESSO:
// 1 Saber se tem um usuário logado
// 2 Se tiver logado, eu tenho que VALIDAR este usuário.
//3 Se sim, liberar o acesso.

// PARA LOGAR:
// 1 Receber os dados do login
// 2 Enviar uma requisição para a API validar os dados -> retornara se o user está cadastrado
// 3 Estando correto, salva-se o 'token' no browser
// 4 Se estiver errado, avisa que está errado

//PARA DESLOGAR:
// 1 A apago a referencia que exiete do usuario no browser
// 1.1 enviar uma requisição ao BACKEND avisando para destruir aquela referência.
// 2 Atualizar a pagina

import { User } from "@/Types/Dasboard/TypeTableUser";

import { useApiLogin } from "@/api/Login/Api-login-token";
import { type } from "os";
import { ReactNode, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export type ContextAuthType = {
  user: User | null
  login: (email: string, password: string)=> Promise<boolean>
  logout: ()=>void
}
export type Children = {
  children: ReactNode
}
export const ContextAuth = createContext<ContextAuthType>(null!);




export const ProviderAuth = ({children}:Children)=>{
  const [user, setUser] = useState<User | null>(null)
  const api = useApiLogin()
  const navigate = useNavigate()

  const login = async (email:string, password: string) =>{
    const data = await api.login(email, password)

    if(data.message === "Successfully login"){
      localStorage.setItem('token', data.token)
      return true
    }

    return false
  }

  const logout = async ()=>{
    const navigate = useNavigate()
  await api.logout()
  setUser(null)
   // Remove o token do localStorage
   localStorage.removeItem('token');
   navigate('/login')
  }

return(
    <ContextAuth.Provider value={{user, login, logout}}>
    {children}
  </ContextAuth.Provider>
)

}

export const UserContext = () =>{
  const contextUser = useContext(ContextAuth)
  if(!contextUser){
    throw new Error('UserTableRegistered deve ser usado dentro de um UserProvider');
  }
  return contextUser

}






