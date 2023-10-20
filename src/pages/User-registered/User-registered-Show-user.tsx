//import Styled Component
import styled from "styled-components"
//import Componentes
import { ShowUser } from "@/components/ui/Components-Pages/User-register/User-Show/user-show";

export const UserRegisteredShow = () => {
  return (
    <DivContainer>
      <ShowUser/>
    </DivContainer>
  )
}

// Styled Component
const DivContainer = styled.div`
display: flex;
flex-direction: column;
margin: 32px;
`

