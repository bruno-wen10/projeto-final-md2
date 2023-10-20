import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
width: 100%;
`
export const Divinputs = styled.div`
display: flex;
gap: 24px;
padding-top: 15px;
padding-bottom: 15px;
`
const sharedStyle = `
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px; /* 19.6px */
  letter-spacing: 0.2px;
  background-color: white;
  color: #757575;
  padding-left: 12px;
`;
export const Span = styled.span`
  ${sharedStyle}
`;

export const Div = styled.div`
  ${sharedStyle}
`;

