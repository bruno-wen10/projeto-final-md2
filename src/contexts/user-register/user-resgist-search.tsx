//import react
import { createContext, useContext, useState } from "react";
//import Tipagem
import { type } from "os";
import { Children } from "../login/contextLogin";
import { MappedUser } from "@/components/ui/table/ReceptTable/ReceptTable";
/* import { ApiResponse } from "@/Types/Dasboard/TypeCards"; */
//impor function response API
import { getApiSearch, getApiTable } from "@/api/User-registered/Api-UserRegistered";
import { User } from "@/Types/TypeRouter";
import { ApiResponse } from "@/Types/Dasboard/TypeTableUser";

type SearchContextProps = {
  onSearch: (search: string) => void
  searchResults: MappedUser[];
}
const SearchContext = createContext<SearchContextProps|undefined>(undefined)



export const SearchProvider = ({ children }: Children) => {
  const [searchResults, setSearchResults] = useState<MappedUser[]>([]);


  const onSearch = async (search: string) => {



        try {
          const result: ApiResponse = await getApiSearch(search);
          if (result) {
            let temporaryDate: MappedUser[] = result.content.map((item) => ({
              user: item?.firstName ? item.firstName : '-',
              email: item.email,
              whatsapp: item.phone,
              especialidade: item.specialties.length > 0 ? item.specialties[0].name : '-',
              city: item?.address?.city ? item.address?.city : '-',
              estado: item.address?.state ? item.address.state : '-',
              usertype: item.profiles.length > 0 ? item.profiles[0].name : '',
            }));
            setSearchResults(temporaryDate);
            console.log(temporaryDate, 'resultado API');

          }
        } catch (error) {
          throw error;
          console.error('Erro na pesquisa:', error);
        }



};



  return (
    <SearchContext.Provider value={{ onSearch, searchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export const userContextSearchTable = ()=>{
  const SearchTable = useContext(SearchContext)
  if(!SearchTable){
    throw new Error('SearchTable deve ser usado dentro de um UserProvider');
  }
  return SearchTable



}

