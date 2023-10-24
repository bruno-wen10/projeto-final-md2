import styled from 'styled-components'

//import Styled Components
export const Search = styled.div`
  position: relative;
`
export const InputSearch = styled.input`
  width: 400px;
  height: 56px;
  border-radius: 16px;
  border: 1.5px solid var(--cinzas-cinza-300, #e0e0e0);
  background: var(--Branco, #fff);
  color: var(--cinzas-cinza-600, #757575);
  padding: 16px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.2px;
`
export const Img = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  left: 90%;
  transform: translateY(-40%);
  cursor: pointer;
`
