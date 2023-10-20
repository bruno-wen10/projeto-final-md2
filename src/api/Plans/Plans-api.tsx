import axios, { AxiosResponse } from 'axios';
import { ApiResponse } from '@/Types/Plans/type-plans';

const token = localStorage.getItem('token');
const apiUrl = 'https://api.buscarmedicos.izap.dev/plans';

export type PlanApi = {
  content: {
  id: number;
  planTitle: string;
  enabled: boolean;
  period: string;
  type: string;
  values: number;
  }[]

};

const getPlans = async () => {
  try {
    const response:AxiosResponse<ApiResponse> = await axios.get(apiUrl, {headers:{
      Authorization: token
    }});
    return response.data.content;
  } catch (error) {
    console.error('Erro ao buscar os planos: ', error);
    return [];
  }
};

export default getPlans;
