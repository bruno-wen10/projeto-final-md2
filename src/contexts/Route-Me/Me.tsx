//import type
import { Me } from "@/Types/TypeRouter";
import { Children } from "../login/contextLogin";
//import React
import { createContext, useContext, useEffect, useState } from "react";
//import API
import { getApiMeUser } from "@/api/Login/Api-login-token";

export const MeContext = createContext({}as Me)

export const MeContextProvider = ({children}:Children)=>{

  const [DataMe, setDataMe] = useState<Me>({} as Me)
  console.log( 'Result Api Me ')

  const meUser = async()=>{

    try{
      const apiDateMeUser = await getApiMeUser()

      setDataMe(apiDateMeUser)

      console.log(apiDateMeUser, 'Result Api Me ')


    } catch(error){
      console.error('Error:',error)
    }


  }
 useEffect(()=>{
  meUser()

 },[])

return(
  <MeContext.Provider value={DataMe}>
    {children}
  </MeContext.Provider>

)
}

export const useMeContex = ()=>{
  const contextMe = useContext(MeContext)
  if(!contextMe){
    throw new Error('contextMe deve ser usado dentro de um UserProvider')
  }
  return contextMe
}
