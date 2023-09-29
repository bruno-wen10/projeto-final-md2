import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 13%;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 40px;
`
const DivDates1 = styled.div``
const DivDates = styled.div`
  display: flex;
  gap: 15px;
`
const P = styled.p`
  color: var(--cinzas-cinza-600, #757575);
  /* 16px Regular */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.2px;
`
const P2 = styled.p`
  color: var(--cinzas-cinza-900, #212121);

  /* 20px Semibold */
  //fonte Sora
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 28px */
  letter-spacing: 0.2px;
`
const Div = styled.div``
export default {
  Header,
  DivDates,
  P,
  P2,
  Image,
  Div,
  DivDates1
}
