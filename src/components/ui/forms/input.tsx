
import S from './input-styled'
interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  label: string
  id: string


}



export const Inputs = ({label, id, ...props}:InputProps) => {
  return(
    <S.Div>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input {...props}/>
    </S.Div>

  )
}
