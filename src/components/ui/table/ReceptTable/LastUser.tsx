
import Seta from './icons/seta.png'
import { Link } from 'react-router-dom'

export default function LastUser() {
  return (

      <Div>
        <SpanTitle>Ultimos usuários cadastrados</SpanTitle>{' '}
        {/* ISSO VAI PARA UM COMPONENTE SEPARADO */}


        <LinkStyled to={'/UserRegistered'}>
        <Span>
          Ver tudo <img src={Seta} alt="seta" />
        </Span>
        </LinkStyled>

      </Div>

  )
}

// import styled-component
import styled from 'styled-components'

const SpanTitle = styled.span`
  color: var(--cinzas-cinza-900, #212121);
  /* font-family: Sora; */
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 28px */
  letter-spacing: 0.2px;
`
const Div = styled.div`
display: flex;
justify-content: space-between;
padding-right: 5px;
`
export const LinkStyled = styled(Link)`
text-decoration: none;
color: var(--Sistema, #004CE8)
`
const Span = styled.span`
display: flex;
align-items: center;
`
