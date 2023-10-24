import styled from 'styled-components'

const Div = styled.div`
  position: relative;
`
const Input = styled.input`
  border: 1px solid #e0e0e0;
  width: 100%;
  height: 56px;
  border-radius: 16px;
  background: #fff;
  padding: 0 16px;
  outline: none;
  &::placeholder {
    color: #bdbdbd;
  }

  &:focus,
  &:hover {
    border-color: #00c247;
    outline-color: #00c247;
  }
`

const Label = styled.label`
  position: absolute;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px; /* 19.6px */
  letter-spacing: 0.2px;
  background-color: white;
  color: #757575;
  left: 12px;
  top: -9px;
`

export default {
  Div,
  Input,
  Label
}

/* width: 400px;
height: 56px;
flex-shrink: 0;

border-radius: 16px;
border: 1px solid var(--cinzas-cinza-300, #E0E0E0);
background: var(--cinzas-cinza-50, #FAFAFA);
 */
