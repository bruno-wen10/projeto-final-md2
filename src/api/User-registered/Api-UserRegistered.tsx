import axios from "axios"
//impot context

// API Numero de Usuários
const UrlApi = 'https://api.buscarmedicos.izap.dev/users/count'



export const ApiUserCount = async () => {
  try{
    const token = localStorage.getItem('token')
    const response = await axios.get(UrlApi, {headers:{
      Authorization: token
    }})
    return (
      response.data
    )
    console.log(response.data)

  }catch(error){
    console.error('Erro na api:', error)
  }


}

// API tabela de usuarios
interface Pagination {
  page: number
  itemsPerPage: number
}

export const  getApiTable = async ({page, itemsPerPage}:Pagination)=>{
  try{
   const Urltable = `https://api.buscarmedicos.izap.dev/users?page=${page}&size=${itemsPerPage}&sort=asc`
  const token = localStorage.getItem('token')
  const response = await axios.get(Urltable, {headers:{
    Authorization: token
  }})
  return response.data
 } catch(error){
  console.error('Erro na api:', error)
 }

}

//Api Para pesquisar


export const getApiSearch = async (search:string,) =>{

  const UrlSearch = `https://api.buscarmedicos.izap.dev/users?search=${search}`

  try{
    const token = localStorage.getItem('token')
    const response  = await axios.get(UrlSearch, {headers:{
      Authorization: token
    }})
    return response.data


  }catch(error){
    console.error('Erro:', error)
  }
}

