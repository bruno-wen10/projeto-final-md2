import User from '@/components/BaseLayout/icons/user2.png'
import Out from '@/components/BaseLayout/icons/logout.png'
import Union from '@/components/BaseLayout/icons/Union.png'
import { useContext } from 'react'
import { ContextAuth } from '@/contexts/context'
import { Link } from 'react-router-dom'

// Styled-Component
import styled from 'styled-components'
const Container = styled.div`
position: absolute;
right: 0px;


`;
const Image = styled.img`

`;
const DivPai = styled.div`
position: relative;
top: -150px;
left: 80px;
width: 90px;
display:flex ;
flex-direction: column;
gap: 20px;

`
const Div = styled.div`
display: flex;
align-items: center;
gap: 10px;


`
const Hr = styled.hr`
width: 100%;
`


const P = styled.p`
color: var(--cinzas-cinza-600, #757575);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
letter-spacing: 0.2px;
`





//function
export const OutUser = ()=>{
  const {logout}= useContext(ContextAuth)


  return (
    <Container>
      <div>
      <img src={Union} alt="sair" />
      </div>

      <DivPai>
        <Div>
          <img src={User} alt="User" /* onClick={navegar até usuario} */ />
          <P>Usuário</P>
        </Div>
        <Hr/>
        <Div>
          <img src={Out} alt="" onClick={logout} />
          <P>Sair</P>
        </Div>
      </DivPai>
    </Container>
  )
}
//<Image src={Union} alt="sair" />
//<img src={User} alt="User" /* onClick={navegar até usuario} *//>
//<img src={Out} alt="" onClick={logout} />
