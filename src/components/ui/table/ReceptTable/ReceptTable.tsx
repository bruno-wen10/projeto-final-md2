import styled from "styled-components";
import { useEffect, useState } from "react";
import fetchDataFromApi from "@/api/Dasboard/Api-Dashboard";
import LastUser from "./LastUser";
import { TableComponent } from "./myTable";
import { ApiResponse } from "../../../../Types/Dasboard/TypeTableUser";

 export interface MappedUser {
  user: string;
  email: string;
  whatsapp: string;
  especialidade?:string
  city?: string
  estado?: string
  usertype: string;
}

function UsersTable() {
  const columns = ["Usuário", "E-mail", "WhatsApp", "Tipo de usuário"];

  const [userDataProcessed, setUserDataProcessed] = useState<MappedUser[]>([]);

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const apiData: ApiResponse = await fetchDataFromApi();
        if (apiData && apiData.content) {
          let temporaryData: MappedUser[] = apiData.content.map((item) => ({
            user: item?.firstName? item.firstName: '-',
            email: item.email,
            whatsapp: item.phone,
            usertype: item.profiles.length > 0 ? item.profiles[0].name : "",
          }));

          setUserDataProcessed(temporaryData);
          console.log(apiData.content)
        }
      } catch (error) {
        console.error('Error date:', error);

      }
    };
    fetchDate();
  }, []);
  return (
    <Container>
      <div>
        <LastUser/>
      </div>
      <TableComponent columns={columns} datesTable={userDataProcessed}/>
      <div>

      </div>
    </Container>
  )
}

export default UsersTable


//Styled-Components
const Container = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
width: 97.5%;
padding: 15px;
margin-left: 10px;
flex-shrink: 0;
border-radius: 24px;
background: var(--Branco, #FFF);

/* Sombra 1 */
box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.40);
`
