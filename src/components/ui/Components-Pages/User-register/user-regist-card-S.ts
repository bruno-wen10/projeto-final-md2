import styled from "styled-components";

export const DivContainer = styled.div`
display: flex;
gap: 16px;
`
export const ClickableDiv = styled.div<{ clicked: boolean }>`
display: flex;
padding: 18px;
justify-content: center;
align-items: center;
gap: 18px;
cursor: pointer;
//font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: ${(props)=>(props.clicked? '600':'400')};
line-height: 140%; /* 28px */
letter-spacing: 0.2px;
border-radius: 16px 16px 0px 0px;
background-color: ${(props)=>(props.clicked? "initial" : "#F5F5F5")};
color: ${(props) => (props.clicked ? "#212121" : "#212121")};
`


export const NumberTotal = styled.span<{ clicked: boolean }>`
display: flex;
padding: 4px 12px;
align-items: flex-start;
gap: 10px;
border-radius: 100px;
background: ${(props)=>(props.clicked?'#046639':'#B4E08E')};
transform: rotate(0.384deg);
//Typography
color: ${(props)=>(props.clicked?'#fff':'#212121')};
/* 14px Regular */
//font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 19.6px */
letter-spacing: 0.2px;
`
export const DivcontainerTable = styled.div`
display: flex;
flex-direction: column;
gap: 50px;
padding-left: 24px;
padding-top: 24px;
padding-right: 24px;
width: 100%;
height: 100%;
border-radius: 0px 24px 24px 24px;
background: var(--Branco, #FFF);
/* Sombra 3 */
box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.20);
`
export const DivHeard = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`
export const TotalUser = styled.div`
color: #000;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
letter-spacing: 0.2px;
`
export const Total = styled.div`
color: #000;

font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 140%; /* 28px */
letter-spacing: 0.2px;
`
export default{
  DivContainer,
  ClickableDiv,
  NumberTotal,
  DivcontainerTable,
  DivHeard,
}
