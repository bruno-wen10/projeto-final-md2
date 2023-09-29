import { useEffect, useState } from "react";
//import Styled components
import styled from 'styled-components';
// import Imagens
import welcome from './icons/Welcome.png'
import DateIcon from './icons/calendar.png'
import { type } from 'os';

type Datatype = {
  year: 'numeric'
  month:'long'
  day: 'numeric'
}
export const WelcomeContainer = ()=>{
  // Logica data
  const [date, setDate] = useState<string>('')

  useEffect(()=>{
    const formatarDataPorExtenso = () => {
      const options:Datatype  = { year: 'numeric', month: 'long', day: 'numeric' };
      const dataAtual = new Date();
      return dataAtual.toLocaleDateString('pt-BR', options);
    };

    const dataFormatada = formatarDataPorExtenso();
    setDate(dataFormatada);
  })

  return(
    <Welcome>
          <ContainerImg>
          <Image src={welcome} alt="welcome" />
          </ContainerImg>

          <ContainerDate>
          <TagDate>
            <img src={DateIcon} alt="dates"/>
            <Span>{date}</Span>

          </TagDate>

            <P>Seja Bem vinda!</P>
            <Paragrafo>Neste painel você poderá administrar seu site de forma simples e prática.</Paragrafo>
          </ContainerDate>

        </Welcome>
  )
}

//Styled Components
const ContainerImg = styled.div`
display: flex;
flex-direction: row-reverse;
`
const ContainerDate = styled.div`
display: flex;
flex-direction: column;
margin-top: 5%;
padding: 10px;

`
const TagDate = styled.div`
margin: 10px;
padding-top: 8px;
padding-left: 5px;
width: 210px;
height: 40px;
border-radius: 5px;
background: var(--primria-azul-2, #0E9658);
`
const Span = styled.span`
padding-left: 10px;
color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 19.6px */
letter-spacing: 0.2px;
`
const P = styled.p`
padding-left: 10px;
color: var(--Branco, #FFF);
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 50.4px */
`
const Paragrafo = styled.p`
color: var(--cinzas-cinza-300, #E0E0E0);
width: 300px;
margin-left: 10px;
/* 20px Regular */
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 28px */
letter-spacing: 0.2px;
`
const Welcome = styled.div`
padding-right: 5px;
width: 400px;
height: 100%;
border-radius: 24px;
background: var(--primria-azul-1, #046639);
box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.40);
`

const Image = styled.img`
width: 60%;
height: 70%;
border-radius: 24px;
`
