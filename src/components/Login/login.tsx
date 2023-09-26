import { type } from 'os'
import ImgBackground from '../../assets/img/Login.png'
import styled from "styled-components";
import { LoginInputs } from './LoginInputs/login-inputs';


export const ImgContainer = styled.div`
background-image: url(${ImgBackground});
background-size: cover;
width: auto;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`


export const LoginContainer = ()=>{
  return(

    <ImgContainer>
     <LoginInputs/>
    </ImgContainer>


  )
}
