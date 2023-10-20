// styled component Table
 import styled from "styled-components"

 export const Table = styled.table`
 width: 100%;
 border-collapse: collapse;
 th:first-child {
   border-radius: 16px 0px 0px 0px;
 }
 th:last-child {
   border-radius: 0px 16px 0px 0px;
 }
 `
 export const THeader = styled.thead`
   width: 1534px;
   height: 72px;
   background-color: #046639;
   color: white;
   font-family: "Poppins";
   font-size: 16px;
   font-weight: 600;
 `
 export const Th = styled.th`
   padding: 10px 15px;
 `
export const TBody = styled.tbody`
width: 1534px;
height: 80px;
flex-shrink: 0;
 `
export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #FAFAFA; /* Fundo cinza para linhas ímpares */
  }
  &:nth-child(even) {
    background-color: #e6e6e6; /* Fundo cinza claro para linhas pares */
  }
`;

export const TdBody = styled.td`
text-align: center; /* Centraliza horizontalmente */
vertical-align: middle; /* Centraliza verticalmente */
 padding: 15px 20px;
 color: var(--cinzas-cinza-900, #212121);
 font-size: 16px;
 font-style: normal;
 font-weight: 400;
 line-height: 150%;
 letter-spacing: 0.2px;

 `
