import styled from 'styled-components'
//import tipagem props
import { ButtonProps } from './edit-profile'

export const ContainerComponent = styled.div`
  display: flex;
`

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-top: 33px;
`

export const Button = styled.button<ButtonProps>`
  display: flex;
  padding: 21px 16px 20px 16px;
  justify-content: space-between;
  width: 330px;
  height: 69px;
  gap: 100px;

  // styled
  border: none;
  color: ${props => (props.Clicked ? '#FFF' : '#616161')};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  letter-spacing: 0.2px;
  border-radius: 16px;
  background: ${props => (props.Clicked ? ' #046639' : '#EEE')};
  cursor: pointer;
`
export const DivDatasAdm = styled.div`
  margin-left: 48px;
  margin-top: 32px;
  width: 50%;
`
