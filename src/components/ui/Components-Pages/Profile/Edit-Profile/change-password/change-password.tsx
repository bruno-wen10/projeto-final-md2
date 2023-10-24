import { ExitPage } from '@/components/ui/ExitPage/exit-page'
import { useMeContex } from '@/contexts/Route-Me/Me'
import {
  Button,
  DivButton,
  DivLine,
  Divider,
  Email,
  Name
} from '../Datas-Profile/datas-profile-styled'
import EditIcons from '../../icons/Edit.png'
import Delet from '../../icons/Delet.png'
import {
  ButtonExcluir,
  ContainerButton,
  Div2Container,
  Divcheck,
  Title
} from './change-password-styled'
import { SButton } from '@/components/ui/button/button-login/butonStyled'

export const ChangePassword = () => {
  const DataMe = useMeContex()
  return (
    <div>
      <ExitPage page={DataMe?.firstName} />

      <DivLine>
        <Name>Nome</Name>

        <Email>{DataMe?.firstName}</Email>

        <DivButton>
          <Button>
            <img src={EditIcons} alt="edit" />
          </Button>
        </DivButton>
      </DivLine>
      <Divider />

      <DivLine>
        <Name>E-mail</Name>

        <Email>{DataMe?.email}</Email>

        <DivButton>
          <Button>
            <img src={EditIcons} alt="edit" />
          </Button>
        </DivButton>
      </DivLine>

      <Divider />

      <DivLine>
        <Name>Senha</Name>

        <Email>***********</Email>

        <DivButton>
          <Button>
            <img src={EditIcons} alt="edit" />
          </Button>
        </DivButton>
      </DivLine>

      <Divider />

      <Div2Container>
        <Title>Permissões</Title>

        <Divcheck>
          <input type="checkbox" />
          <label htmlFor="Admin.geral">Admin. geral</label>
        </Divcheck>

        <Divcheck>
          <input type="checkbox" />
          <label htmlFor="Admin. parcial">Admin. parcial</label>
        </Divcheck>
      </Div2Container>

      <ContainerButton>
        <SButton>Salvar alterações</SButton>

        <ButtonExcluir>Excluir Perfil</ButtonExcluir>
      </ContainerButton>
    </div>
  )
}
