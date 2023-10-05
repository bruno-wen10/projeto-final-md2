  // importação dos icones
  import FramebuscarMedicos  from '../../../assets/img/Frame.png'
  import Dashboard from './icons/Dashboard.png'
  import dollar from './icons/dollar.png'
  import UserEvery from './icons/every-user.png'
  import payCode from './icons/pay-code-two.png'
  import composition from './icons/composition.png'
  import remind from './icons/remind.png'
  import help from './icons/help.png'

  // IMPORTAÇÃO STYLED-COMPONENT
  import S from './menu-styled'
// IMPORT REACT
import { Link } from 'react-router-dom';

export const MenuSide = () => {
  return (
    <S.Nav>
      <S.DivContainer>
      <img src={FramebuscarMedicos} alt="buscar Medicos" />
      </S.DivContainer>

      <div>
        <S.Ul>

        <Link to="/">
            <S.Ol>
              <S.Image src={Dashboard} alt='Dashboard'/>
              Dashboard
            </S.Ol>
          </Link>
          <Link to="/User-registered">
            <S.Ol>
              <S.Image src={UserEvery} alt='UserEvery'/>
              Usuario cadastrado
            </S.Ol>
          </Link>
          <Link to="/Plans">
            <S.Ol>
              <S.Image src={dollar} alt='dollar'/>
              Planos
            </S.Ol>
          </Link>

          <S.Ol>
            <S.Image src={payCode} alt='payCode'/>
            Pagamentos
          </S.Ol>

          <Link to={'/Specialties'}>
          <S.Ol>
            <S.Image src={composition} alt='composition'/>
            Especialidades
          </S.Ol>
          </Link>

          <Link to={'/Notification'}>
          <S.Ol>
            <S.Image src={remind} alt='remind'/>
             Notificações
          </S.Ol>
          </Link>

          <Link to={'/FAQ'}>
          <S.Ol>
            <S.Image src={help} alt=''/>
             FAQ
            </S.Ol>
          </Link>

        </S.Ul>
      </div>
    </S.Nav>
  )
}
