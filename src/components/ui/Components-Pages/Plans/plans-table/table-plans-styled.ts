import styled from 'styled-components'

export const Section = styled.section`
  margin-top: 30px;
  margin-left: 40px;
`

export const DivSwitch = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 25px;
`

export const InputCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
export const Label = styled.label`
  color: #757575;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  letter-spacing: 0.2px;
`
export const Span = styled.span`
  color: #212121;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.2px;
`
export const Input = styled.input`
  width: 65px;
  height: 30px;
  appearance: none;
  background-color: #ccc;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.4s;
  position: relative;

  &:checked {
    background-color: green;
  }

  &:before {
    content: '';
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50px;
    position: absolute;
    box-shadow: 0px 4px 8px 1px rgb(170, 170, 170);
  }

  &:checked:before {
    left: 36px;
  }
`
