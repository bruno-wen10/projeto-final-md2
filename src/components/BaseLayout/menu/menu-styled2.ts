import styled from "styled-components";

const Nav2 = styled.nav`
background-color: #046639;
width: 10vw;
height: auto;
`
const DivContainer2 = styled.div`
padding-top: 24px;
margin-left: 25px;
margin-bottom: 24px;

`
const Ol2 = styled.ol`
display: flex;
gap: 15px;
color: white;
width: 47px;
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
  width: 47px;
  height: 26px;
  padding-left: 15px;
}
`
const Image2 = styled.img`
width: 24px;
height: 24px;
flex-shrink: 0;
`
const Ul2 = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
cursor: pointer;


`
export default {
Nav2, Ol2, Ul2,DivContainer2, Image2
}
