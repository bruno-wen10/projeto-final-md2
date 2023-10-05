import styled from "styled-components"
// Import Component

//Import type
import { type } from "os"
//Import Api
import { columns, data } from "../tableApi"
import LastUser from "./LastUser"
import { TableComponent } from "./myTable"





//Literal type
type Tamplat = {
  Dashboard: 'Dashboard',
  UserRegister: 'UserRegister'
  Perfil: 'Perfil'
  General: 'General'
}  // FALTA CONSTRIR OS COMPONENTES PARA FAZER O iF TERNÁRIO

function LastUsersDashboard() {
  return (
    <Container>
      <div>
        <LastUser/>
      </div>
      <TableComponent columns={[]} datesTable={[]}/>
      <div>

      </div>
    </Container>
  )
}

export default LastUsersDashboard


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
