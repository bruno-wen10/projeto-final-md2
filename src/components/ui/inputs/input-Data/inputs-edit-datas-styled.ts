import styled from "styled-components";
interface DivProps {
  inputWidth: string;
  inputHeight: string;
}
export const Div = styled.div`
position: relative;
`
export const Input = styled.input<DivProps>`

border: 1px solid #E0E0E0;
width: ${(props) => props.inputWidth};
  height: ${(props) => props.inputHeight};
border-radius: 16px;
background:  #FAFAFA;
padding: 0 16px;
outline: none;
&::placeholder{
  color: #BDBDBD;
}
`
export const Select = styled.select<DivProps>`
  border: 1px solid #E0E0E0;
  width: ${(props) => props.inputWidth};
  height: ${(props) => props.inputHeight};
  border-radius: 16px;
  background: #FAFAFA;
  padding: 0 16px;
  outline: none;
`;

export const Label = styled.label`
position: absolute;
font-size: 14px;
font-weight: 400;
line-height: 19.6px; /* 19.6px */
letter-spacing: 0.2px;
background-color: white;
color:#757575 ;
left: 12px;
top: -9px;
`


export default{
  Div, Input, Label,
}
