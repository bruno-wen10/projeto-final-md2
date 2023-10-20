//import icones
import {HiOutlineChevronRight} from 'react-icons/hi'
//import Components
import { DatasProfile } from './Datas-Profile/datas-profile';
import { AdmProfis } from './Adm-Profile/adm-perfis';
import { NewProfile } from './Datas-Profile/datas-profile-styled';
// styled component
import {
  Button,
  ContainerComponent,
  DivContainer,
  DivDatasAdm,
 } from './edit-profile-styled'
//import react
import { useState } from 'react'
import { ChangePassword } from './change-password/change-password';
//import type
export type ButtonProps = {
  Clicked: string| boolean;
};

export const EditProfile = () => {
  const [click, setClick]= useState('dados')

  return (

    <ContainerComponent>
      <DivContainer>
      <Button
        onClick={()=>setClick('dados')}
        Clicked={click === 'dados' }
        >

        Dados <span><HiOutlineChevronRight/></span>
      </Button>

      <Button
       onClick={()=>setClick('change-password')}
       Clicked={click === 'change-password'}
       >

        Alterar senha <span><HiOutlineChevronRight/></span>
      </Button>

      <Button
       onClick={()=>setClick('adm-perfil')}
       Clicked={click === 'adm-perfil' }
       >

        Administrar perfis <span><HiOutlineChevronRight/></span>
      </Button>

    </DivContainer>

    <DivDatasAdm>

      {click=== 'dados'&&<DatasProfile dados={'Dados'} />}

      {click === 'adm-perfil' && <AdmProfis dados={'Administrar perfis'} click={click} setClick={ setClick} />}

      {click ==='change-password' && <ChangePassword/>}



    </DivDatasAdm>

    </ContainerComponent>
  )
}
