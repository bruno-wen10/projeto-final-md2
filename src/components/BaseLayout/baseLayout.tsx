import { Outlet } from 'react-router-dom'
//IMPORT REACT
import { useState } from 'react'
//IMPORTAÇÃO COMPONENTES
import { MenuSide } from './menu/menuExpensive'
import { HeardTop } from './header/heard'
import { MenuMinimize } from './menu/menuMinimizar'
import MedicosEContratante from '../ui/cardMedicos/componenteMedicos'

//IMPORTAÇÃO STYLED-COMPONENTS
import S from './base-layout'
import LastUsersDashboard from '../ui/table/ReceptTable/ReceptTable'

const BaseLayout = () => {
  //Menu hamburguer
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const ToggleMenuHamburguer = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <S.Section>
      {menuIsOpen ? <MenuSide /> : <MenuMinimize />}

      <S.Article>
        <HeardTop onHamburgClik={ToggleMenuHamburguer} />

        <S.Main>
          {/* <DivContainer>
            <MedicosEContratante />

            <LastUsersDashboard />
          </DivContainer> */}

          <Outlet />
        </S.Main>
      </S.Article>
    </S.Section>
  )
}
export default BaseLayout

//IMPORTAÇÃO STYLED-COMPONENTS
import styled from 'styled-components'

const DivContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
