import { useState } from 'react'
import S from './inputs-edit-datas-styled'
interface InputProps {
  label: string
  id: string

  isLarge: boolean
}

interface InputStyles {
  inputWidth: string
  inputHeight: string
}
export const InputsEditDatas = ({ label, id, isLarge }: InputProps) => {
  const [dateInput, setDataInput] = useState('')

  const handleDataInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDataInput(event.target.value)
  }

  const inputStyles: InputStyles = {
    inputWidth: isLarge ? '400px' : '20vw',
    inputHeight: isLarge ? '150px' : '40px'
  }
  return (
    <S.Div>
      <S.Input
        type="text"
        value={dateInput}
        onChange={handleDataInputChange}
        inputWidth={inputStyles.inputWidth}
        inputHeight={inputStyles.inputHeight}
      />
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.Div>
  )
}
