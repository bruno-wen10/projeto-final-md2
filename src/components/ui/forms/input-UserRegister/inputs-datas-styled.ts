import styled from 'styled-components'
interface DivProps {
  inputWidth: string
  inputHeight: string
}
export const Div = styled.div`
  position: relative;
`
export const Input = styled.div<DivProps>`
  border: 1px solid #e0e0e0;
  width: ${props => props.inputWidth};
  height: ${props => props.inputHeight};
  border-radius: 16px;
  background: #fafafa;
  padding: 0 16px;
  outline: none;
  &::placeholder {
    color: #bdbdbd;
  }
`

export const Label = styled.label`
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
