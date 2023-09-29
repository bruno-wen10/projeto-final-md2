import styled from 'styled-components';







interface CardProps {
  type: 'contratante' | 'medico'; // Indica o tipo do card

}

const Card= ({type }:CardProps) => {
  return (

      <Médicos>{type === 'medico' ? 'Médicos' : 'Contratantes'}</Médicos>





  );
};

export default Card;

const Médicos = styled.div`
color: var(--cinzas-cinza-900, #212121);

/* 20px Semibold */
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 140%; /* 28px */
letter-spacing: 0.2px;
`
