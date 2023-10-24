import { EditProfile } from './Edit-Profile/edit-profile'

export const ProfileReceiver = () => {
  return (
    <Div>
      <H4>Edição de Perfil</H4>

      <EditProfile />
    </Div>
  )
}

//import styled components
import styled from 'styled-components'

const Div = styled.div`
  margin-left: 32px;
  margin-top: 32px;
`
const H4 = styled.h4`
  color: var(--cinzas-cinza-900, #212121);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 48px */
`
