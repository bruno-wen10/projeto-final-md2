import axios from "axios";
import { url } from "inspector";
import { useEffect, useState } from "react";
import { JSX } from "react/jsx-runtime";



export const ApiLogin = ()=>{
  const Url = 'https://api.buscarmedicos.izap.dev/users'
  const UrlLogin = 'https://api.buscarmedicos.izap.dev/public/register/login?email=admin%40email.com&password=Teste%40123'

  const [token, setToken] = useState('')
  const [data, setDate] = useState([])

  useEffect(()=>{
    const fetchRequest = async ()=> {
      try{
        const response = await axios.post(UrlLogin)
      console.log(response)

      const token = response.data.token
      setToken(token)
      console.log(token)
      axios.get(Url, {headers:{Authorization: `Bearer ${token}`}})
      .then((response)=>{

        setDate(response.data.content)
      })
      } catch (error){
        console.error('Erro ao obter token:', error)
      }

    }
    fetchRequest()

  }, [])
  return(
    <div>Data</div>
  )

}

