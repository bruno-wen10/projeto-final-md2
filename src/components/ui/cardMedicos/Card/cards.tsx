// import REACT
import axios from 'axios';
import { useEffect, useState } from 'react';
// IMPORT STYLED COMPONENTS
import styled from 'styled-components';
//IMPORT COMPONENTE
import { CardDates } from './CardGenerico';
// IMPORT ICONE IMG
import EveryUser from'../../../BaseLayout/menu/icons/every-user.png'
import PeopleSearch from './icons/people-search.png'

interface CardProps {
  type: 'contratante' | 'medico'; // Indica o tipo do card

}

const Card= ({type }:CardProps) => {

   const [cardsDashboard, setCardsDashboard] = useState([]);



  useEffect(()=>{
     const getDatesDashboard = async () => {
      try{
        const ApiUrl = 'Url aqui'

        const response = await axios.get(ApiUrl)

        //ver os dados que chegam da api
        console.log('Dados da Api:', response.data)

        setCardsDashboard(response.data)

        }catch (error) {
        // Se ocorrer um erro durante a solicitação
        console.error('Erro ao buscar cards:', error);

     }
    }
    getDatesDashboard()
  }, [])
  return (
    <>
      <Médicos>{type === 'medico' ? 'Médicos' : 'Contratantes'}</Médicos>

      <DivContainer>

        <CardDates titulo={'Total'} number={100} color={type=== 'contratante'? '#FFB801':'#004CE8'} icon={type === 'contratante'? "PeopleSearch": "EveryUser"} />
        <CardDates titulo={'Disponíveis'} number={100} color={'#00C247'} icon={type === 'contratante'? "PeopleSearch": "EveryUser"} />
        <CardDates titulo={'Indisponíveis'} number={100} color={'#FF3333'} icon={type === 'contratante'? "PeopleSearch": "EveryUser"} />


        {cardsDashboard.map((card) => (
            <>
            <CardDates titulo={'Total'} number={card} color={''} icon={''} />
            <CardDates titulo={'Disponíveis'} number={card} color={''} icon={''} />
            <CardDates titulo={'Indisponiveis'} number={card} color={''} icon={''} />
            </>


        ))}
      </DivContainer>
    </>
  )
};

export default Card;

 const Médicos = styled.div`
color: var(--cinzas-cinza-900, #212121);


font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 140%;
letter-spacing: 0.2px;
`
const DivContainer = styled.div`
display: flex;
gap: 1vw;

`


