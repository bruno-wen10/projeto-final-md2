//import Imagens Icones
import setaUser from './icons/setaUser.png'
import userout from './icons/userOut.png'
//import react
import { Link } from 'react-router-dom'
import {
  DivContainer,
  ImagemBola,
  ImagemSeta,
  H1,
  Container } from "@/components/ui/ExitPage/user-show-styled"

interface Page {
  page: string
}

export const ExitPage = ({page}:Page)=>{
  return(
    <DivContainer>
<Link style={{ textDecoration: 'none' }} to={'/User-registered'}>
    <ImagemBola src={userout} />
    <ImagemSeta src={setaUser} alt='seta user' />
</Link>
    <H1>{page}</H1>

  </DivContainer>
  )
}
