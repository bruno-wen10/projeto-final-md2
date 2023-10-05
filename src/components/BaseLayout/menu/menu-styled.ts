import styled from "styled-components";

const Nav = styled.nav`
background-color: #046639;
width: 24vw;
height: auto;

`
const DivContainer = styled.div`
padding-top: 24px;
margin-left: 18px;
margin-bottom: 24px;
`
const Ol = styled.ol`
display: flex;
gap: 15px;
color: white;
width: 196px;
height: 26px;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 24px */
letter-spacing: 0.2px;
//diminuir o tamanho do icone
&:hover{
  border: none;
  border-radius: 8px;
  background: var(--primria-azul-4, #B4E08E);
  color: var(--primria-azul-1, #046639);
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: 0.2px;
  width: 200px;
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 10px;


}
`
const Image = styled.img`
width: 23px;
height: 24px;
flex-shrink: 0;
`
const Ul = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
cursor: pointer;


`
export default {
Nav, Ol, Ul,DivContainer, Image
}
