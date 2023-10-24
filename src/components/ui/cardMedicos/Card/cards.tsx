// import REACT
import axios from 'axios'
import { useEffect, useState } from 'react'
// IMPORT STYLED COMPONENTS
import styled from 'styled-components'
//IMPORT COMPONENTE
import { CardDates } from './CardGenerico'
// IMPORT ICONE IMG
import EveryUser from '../../../BaseLayout/menu/icons/every-user.png'
import PeopleSearch from './icons/people-search.png'
// import Api
import { fetchDataCardApi } from '@/api/Dasboard/Api-Dashboard'
// Import Type
import { ApiResponse, DoctorsContractor } from '@/Types/Dasboard/TypeCards'

interface CardProps {
  type: 'contratante' | 'medico' | 'total' | 'disponivel' | 'indisponivel' // Indica o tipo do card
}

const Card = ({ type }: CardProps) => {
  const [cardsDashboard, setCardsDashboard] = useState<DoctorsContractor>({
    total: 0,
    available: 0,
    unavailable: 0
  })

  useEffect(() => {
    const GetFetchDate = async () => {
      try {
        const apiDate: ApiResponse = await fetchDataCardApi()
        if (type === 'medico') {
          setCardsDashboard(apiDate.doctor)
        } else if (type === 'contratante') {
          setCardsDashboard(apiDate.contractor)
        }
        console.log('card:', apiDate.contractor)
      } catch (error) {
        console.error(`Erro:`, error)
        throw error
      }
    }
  }, [])

  return (
    <>
      <Médicos>{type === 'medico' ? 'Médicos' : 'Contratantes'}</Médicos>

      <DivContainer>
        <CardDates
          titulo={'Total'}
          number={type === 'total' ? cardsDashboard.total : null}
          color={type === 'contratante' ? '#FFB801' : '#004CE8'}
          icon={type === 'contratante' ? PeopleSearch : EveryUser}
        />

        <CardDates
          titulo={'Disponíveis'}
          number={type === 'disponivel' ? cardsDashboard.available : null}
          color={'#00C247'}
          icon={type === 'contratante' ? PeopleSearch : EveryUser}
        />

        <CardDates
          titulo={'Indisponíveis'}
          number={type === 'indisponivel' ? cardsDashboard.unavailable : null}
          color={'#FF3333'}
          icon={type === 'contratante' ? PeopleSearch : EveryUser}
        />
      </DivContainer>
    </>
  )
}

export default Card

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
