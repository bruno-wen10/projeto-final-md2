
//import react
import { useEffect, useState } from 'react';
import InfoCard from './Card/card-medicos';
import { Outlet } from 'react-router-dom';
//import Styled components
import styled from 'styled-components';
//import Componentes
import Card from './Card/card-medicos';
import { WelcomeContainer } from './Card/welcome';



function MedicosEContratante() {



  return (
    <>
      <Containe>


       <WelcomeContainer/>



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

export default MedicosEContratante;


//stylecomponents
const Containe = styled.div`
display: flex;
gap: 20px;
`
const ContainerCard = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`
const Div = styled.div`
width: 600px;
height: 200px;
flex-shrink: 0;
//Style
border-radius: 24px;
background: var(--Branco, #FFF);
/* Sombra 1 */
box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.40);
padding: 25px;
`


