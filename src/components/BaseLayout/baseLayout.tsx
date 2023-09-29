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




const Layout = () => {
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
        <main>

          <S.Div>
          <MedicosEContratante/>
          </S.Div>

          <Outlet />
        </main>
      </S.Article>
    </S.Section>
  )
}
export default Layout
