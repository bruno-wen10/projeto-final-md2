//import react
import { useEffect, useState } from 'react'
import InfoCard from './Card/cards'
import { Outlet } from 'react-router-dom'
//import Styled components
import styled from 'styled-components'
//import Componentes
import Card from './Card/cards'
import { WelcomeContainer } from './Card/welcome'

function MedicosEContratante() {
  return (
    <>
      <Containe>
        <WelcomeContainer />

        <ContainerCard>
          <Div>
            <Card type={'medico'} />
          </Div>
          <Div>
            <Card type={'contratante'} />
          </Div>
        </ContainerCard>
      </Containe>

      <Outlet />
    </>
  )
}

export default MedicosEContratante

//stylecomponents
const Containe = styled.div`
 display: flex;
 gap: 15px;
 padding-left: 10px;
`
const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;


  `
const Div = styled.div`

  width: 100%;
  height: 47.56%;

  //Style
  border-radius: 24px;
  background: var(--Branco, #fff);
  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
  padding: 15px;
`
