//import React
import { ContextAuth } from '@/contexts/login/contextLogin'
import { createContext, useContext, useEffect, useState } from 'react'
//import Api
import { getApiMeUser } from '@/api/Login/Api-login-token'

//import Stayled e icons
import MiniMenu from '../icons/default.png'
import IconsUser from '@/components/BaseLayout/icons/user.png'
import logoutUser from '@/components/BaseLayout/icons/chevron down.png'
import S from '@/components/BaseLayout/header/heder-styled'
//import Compodente
import { OutUser } from './out&user'

//import type
import { Me } from '@/Types/TypeRouter'

 //typagem da função
type HamburgProps = {
  onHamburgClik: () => void;
 }

export const HeardTop = ({onHamburgClik}:HamburgProps) => {
  const {logout } = useContext(ContextAuth)

  //router /me
  const [DataMe, setDataMe] = useState<Me>()
  console.log( 'Result Api Me ')

  const meUser = async()=>{

    try{
      const apiDateMeUser = await getApiMeUser()

      setDataMe(apiDateMeUser)

      console.log(apiDateMeUser, 'Result Api Me ')


    } catch(error){
      console.error('Error:',error)
    }


  }
 useEffect(()=>{
  meUser()

 },[])


  //Menu Sair
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleLogoutMenu = ()=>{
    setMenuAberto(!menuAberto)
  }




  return (
    <S.Header>
      <S.DivDates1>
        <img src={MiniMenu} alt="mini menu" style={{ cursor: 'pointer' } }  onClick={onHamburgClik}  />
      </S.DivDates1>
      <S.DivDates>
        <div>
          <img src={IconsUser} alt="icone usuario" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <S.P2>{DataMe?.firstName}</S.P2>
          <S.P>{DataMe?.email}</S.P>
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


