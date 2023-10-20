
import S from '../input-Login/input-styled'
interface InputProps {

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
