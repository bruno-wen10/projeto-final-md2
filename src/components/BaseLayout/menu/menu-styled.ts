import styled from 'styled-components'

const Nav = styled.nav`
  text-decoration: none;
  background-color: #046639;
  width: 24vw;
  height: 100vh 100%;
`
const DivContainer = styled.div`
  text-decoration: none;
  padding-top: 24px;
  margin-left: 18px;
  margin-bottom: 24px;
`
const Ol = styled.ol`
  text-decoration: none;
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
  &:hover {
    border: none;
    border-radius: 8px;
    background: var(--primria-azul-4, #b4e08e);
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
  text-decoration: none;
  width: 23px;
  height: 24px;
  flex-shrink: 0;
`
const Ul = styled.ul`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  cursor: pointer;
`
const LinkMenu = styled.link`
  text-decoration: none;
`
export default {
  Nav,
  Ol,
  Ul,
  DivContainer,
  Image,
  LinkMenu
}
