// importação dos icones
import FramebuscarMedicos from './icons/Frame2.png'
import Dashboard from './icons/Dashboard.png'
import dollar from './icons/dollar.png'
import UserEvery from './icons/every-user.png'
import payCode from './icons/pay-code-two.png'
import composition from './icons/composition.png'
import remind from './icons/remind.png'
import help from './icons/help.png'

// IMPORTAÇÃO STYLED-COMPONENT
import S from '@/components/BaseLayout/menu/menu-styled2'
import { Link } from 'react-router-dom'

export const MenuMinimize = () => {
  return (
    <S.Nav2>
      <S.DivContainer2>
        <img src={FramebuscarMedicos} alt="buscar Medicos" />
      </S.DivContainer2>

      <div>
        <S.Ul2>
          <Link to="/">
            <S.Ol2>
              <S.Image2 src={Dashboard} alt="Dashboard" />
            </S.Ol2>
          </Link>
          <Link to="/User-registered">
            <S.Ol2>
              <S.Image2 src={UserEvery} alt="UserEvery" />
            </S.Ol2>
          </Link>
          <Link to="/Plans">
            <S.Ol2>
              <S.Image2 src={dollar} alt="dollar" />
            </S.Ol2>
          </Link>

          <S.Ol2>
            <S.Image2 src={payCode} alt="payCode" />
          </S.Ol2>

          <Link to={'/Specialties'}>
            <S.Ol2>
              <S.Image2 src={composition} alt="composition" />
            </S.Ol2>
          </Link>

          <Link to={'/Notification'}>
            <S.Ol2>
              <S.Image2 src={remind} alt="remind" />
            </S.Ol2>
          </Link>

          <Link to={'/FAQ'}>
            <S.Ol2>
              <S.Image2 src={help} alt="" />
            </S.Ol2>
          </Link>
        </S.Ul2>
      </div>
    </S.Nav2>
  )
}
