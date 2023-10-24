//import Styled Component
import styled from 'styled-components'

//import Componentes
import UsersRegistersTotal from '@/components//ui/Components-Pages/User-register/user-regist-card'

function UserRegistered() {
  return (
    <DivContainer>
      <UsersRegistersTotal />
    </DivContainer>
  )
}
export default UserRegistered

// Styled Component
const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px;
`
