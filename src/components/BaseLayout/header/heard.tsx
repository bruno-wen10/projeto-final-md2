import { ContextAuth } from '@/components/Login/LoginInputs/contexts/context'
import MiniMenu from '../icons/default.png'
import { createContext, useContext, useState } from 'react'
import IconsUser from '@/components/BaseLayout/icons/user.png'
import logoutUser from '@/components/BaseLayout/icons/chevron down.png'
import S from '@/components/BaseLayout/header/heder-styled'
//import Compodente
import { OutUser } from './out&user'
export const HeardTop = () => {
  const { user, logout } = useContext(ContextAuth)
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleLogoutMenu = ()=>{
    setMenuAberto(!menuAberto)
  }

  return (
    <S.Header>
      <S.DivDates1>
        <img src={MiniMenu} alt="mini menu" />
      </S.DivDates1>
      <S.DivDates>
        <div>
          <img src={IconsUser} alt="icone usuario" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <S.P2>BRUNO</S.P2>
          <S.P>bruno@gmail.com</S.P>
        </div>

        <S.Div>

          <div>
            <img src={logoutUser} alt="sair" onClick={toggleLogoutMenu} style={{ cursor: 'pointer' }}/>
          </div>

          {menuAberto && <OutUser />}

        </S.Div>


        {/* // CODIGO PARA USAR COM API */}
      </S.DivDates>
    </S.Header>
  )
}



        {/* {user?(
          <>
          <div>
            <div>
            <img src={IconsUser} alt="icone usuario" />
            </div>
            <div>

              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
            <div>

            </div>
          </div>
          </>
        ): null} */}
