import axios from 'axios';



const ApiUrl = 'https://api.buscarmedicos.izap.dev/users?page=1&size=6&sort=DESC'

async function fetchDataFromApi(){

    try{
      const token = localStorage.getItem('token')
      const response = await axios.get(ApiUrl, {headers:{
        Authorization: token
      }})
      return response.data

    }catch(error){
      console.error('Erro ao buscar dados da API:', error)
      throw error;
    }

}

export default fetchDataFromApi

// CHAMADA API PARA OS CARDS
const ApiUrlCards = 'https://api.buscarmedicos.izap.dev/users/dashboard'

export const fetchDataCardApi = async() =>{

  try{
    const token = localStorage.getItem('token')
    const response = await axios.get(ApiUrl, {headers:{
      Authorization: token
    }})
    return response.data

  }catch(error){
    console.error('Erro ao buscar dados da API:', error)
    throw error;
  }

}



