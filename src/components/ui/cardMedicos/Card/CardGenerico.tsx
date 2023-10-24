//import Type
import { type } from 'os'
//Import style components
import styled from 'styled-components'
// import component
import IconsColor from './iconsCard'

type MedicosProps = {
  number: number | null
  titulo: string
  color: string
  icon: string
}

export const CardDates = ({ titulo, number, color, icon }: MedicosProps) => {
  return (
    <Container>
      <div>
        <IconsColor icon={icon} color={color} />
      </div>

      <Div>
        <div>{titulo}</div>
        <Number>{number}</Number>
      </Div>
    </Container>
  )
}

//styled component

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.6vw;
  width: 14vw;
  height: 122.5px;
  border-radius: 24px;
  background: var(--cinzas-cinza-100, #f5f5f5);
`
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 1vw;

  color: var(--cinzas-cinza-600, #757575);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.2px;
`
const Number = styled.div`
  color: var(--cinzas-cinza-900, #212121);

  font-size: 29px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 48px */
`
