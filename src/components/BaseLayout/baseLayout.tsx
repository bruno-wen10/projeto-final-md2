import { Outlet } from "react-router-dom"
import  {MenuSide}  from "./menu/menuExpensive"
import {HeardTop} from './header/heard'
import S from './base-layout'


 const Layout = () => {
  return (
    <S.Section>
      <MenuSide/>
      <article>
        <HeardTop/>
        <main>

          <Outlet/>
        </main>
      </article>
    </S.Section>
  )
}
export default Layout
