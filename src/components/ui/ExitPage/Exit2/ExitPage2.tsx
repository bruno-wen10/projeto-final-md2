//import Imagens Icones
import setaUser from '../icons/setaUser.png'
import userout from '../icons/userOut.png'
//import react
import { Link, useNavigate } from 'react-router-dom'
import {
  DivContainer,
  ImagemBola,
  ImagemSeta,
  H1,
  Container
} from '@/components/ui/ExitPage/Exit2/exit-page2-styled'

interface Page {
  page: string
  linkNavigate: string
}

export const ExitPage2 = ({ page, linkNavigate }: Page) => {
  const dynamicLink = `${linkNavigate}`
  const navigate = useNavigate()
  return (
    <DivContainer>
      <div
        style={{ textDecoration: 'none' }}
        onClick={() => navigate(linkNavigate)}
      >
        <ImagemBola src={userout} />
        <ImagemSeta src={setaUser} alt="seta user" />
      </div>

      <H1>{page}</H1>
    </DivContainer>
  )
}
