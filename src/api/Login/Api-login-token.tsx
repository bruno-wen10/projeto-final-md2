import axios from "axios";


export const apiUrl = axios.create({
  baseURL: 'https://api.buscarmedicos.izap.dev'
})

export const useApiLogin = ()=>({
  validateToken:async (token:string) => {
    const response = await apiUrl.post('/validate', {token})
  },
  login: async (email:string, password: string) => {
    const response = await apiUrl.post('/public/register/login',{},{
      params: {email, password}
    })
    return response.data
  },
  logout: async ()=>{
    const response = await apiUrl.post('/logout')
    return response.data
  },


})

// Route Api /Me -- user

export const getApiMeUser = async()=>{
  const UrlUser = `https://api.buscarmedicos.izap.dev/me`
  try{
    const token = localStorage.getItem('token')
    const response = await axios.get(UrlUser, {headers:{
      Authorization: token
    }})
    return(
      response.data
    )

  } catch(error){
    console.error('Erro na api:', error )
    throw error
  }
}
