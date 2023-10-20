//import api
import { ApiResponse } from "@/Types/Dasboard/TypeTableUser";
import { getApiTable } from "@/api/User-registered/Api-UserRegistered";


//useContext
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
// import typagem
import { MappedUser } from "@/components/ui/table/ReceptTable/ReceptTable";
import { Page } from "@/components/ui/paginação/pagnation";


interface Children {
  children: ReactNode
}

interface UserContextType{
  userDatetable: MappedUser[]
  columns: string[]
  page: number
  setPage: Dispatch<SetStateAction<number>>
  itemsPerPage: number
  setItemsPerPage: Dispatch<SetStateAction<number>>
}

export const Userscontext = createContext<UserContextType| undefined>(undefined)

export const ProvaiderContextTableUsers = ({ children }: Children)=>{
  const columns = ['usuário', 'E-mail','WhatsApp', 'Especialidade', 'Cidade', 'Estado', 'Tipo de Usuário']
  const [userDatetable, setUserDateTable] = useState<MappedUser[]>([])

  useEffect(()=>{
    const fetchDateList = async ()=>{
      try{
        const apiData:ApiResponse = await getApiTable({page, itemsPerPage})

        if (apiData && apiData.content){
          let temporaryDate: MappedUser[] = apiData.content.map((item)=>({
            user: item?.firstName? item.firstName: '-',
            email: item.email,
            whatsapp: item.phone,
            especialidade: item.specialties.length>0? item.specialties[0].name:'-',
            city: item?.address?.city? item.address?.city: '-',
            estado: item.address?.state ? item.address.state : '-',
            usertype: item.profiles.length > 0 ? item.profiles[0].name: '',

          }))

          setUserDateTable(temporaryDate)
          console.log(apiData.content, 'resultado API listagem')
          console.log(temporaryDate, 'resultado API listagem')
        }



      }catch(error){
        console.error('Error date:', error);
      }
    }
    fetchDateList();
  }, [])

  // paginação -------------------------------------------------
  const [page, setPage]=useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(6)


  return(
    <Userscontext.Provider value={{userDatetable, columns, page, setPage, itemsPerPage, setItemsPerPage }}>
      {children}
    </Userscontext.Provider>
  )
}

export const UserTableRegistered = ():UserContextType =>{
  const contextTable = useContext(Userscontext)
  if(!contextTable){
    throw new Error('UserTableRegistered deve ser usado dentro de um UserProvider');
  }
  return contextTable

}
