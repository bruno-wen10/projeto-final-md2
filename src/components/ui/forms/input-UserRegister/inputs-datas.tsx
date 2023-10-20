import S from './inputs-datas-styled'
interface InputProps {
  label: string
  id: string
  userName: string| number
  isLarge: boolean;
}

interface InputStyles {
  inputWidth: string;
  inputHeight: string;
}
export const InputsDatas = ({label, id, userName, isLarge}:InputProps) => {
  const inputStyles: InputStyles = {
    inputWidth: isLarge ? "400px" : "20vw",
    inputHeight: isLarge ? "150px" : "40px",
  };
  return(
    <S.Div>
      <S.Input  inputWidth={inputStyles.inputWidth} inputHeight={inputStyles.inputHeight}>
      <S.Label htmlFor={id}>{label}</S.Label>
        {userName}
      </S.Input>
    </S.Div>

  )
}
