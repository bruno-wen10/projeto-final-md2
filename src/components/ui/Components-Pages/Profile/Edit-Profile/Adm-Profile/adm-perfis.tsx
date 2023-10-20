// import tipagem
import { Me } from "@/Types/TypeRouter"
//import styled component
import { Button, Container, DivButton, DivLine, Divider, Email, H4, Name, NewProfile } from "../Datas-Profile/datas-profile-styled"
//import Icons
import EditIcons from '../../icons/Edit.png'
import Delet from '../../icons/Delet.png'
//import react
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
//import Context
import { useMeContex } from "@/contexts/Route-Me/Me"
//import componente
import { ButtonNewProfile } from "@/components/ui/button/button-new-profile/button-new-profile"




export interface DadosProps {
  dados?: string
  click?: string
  setClick: (arg0: string)=> void | undefined
}
  export const AdmProfis = ({dados, click}:DadosProps) => {
    const DataMe = useMeContex()


  return (

    <Container>

      {click==='adm-perfil'&&

        <>
        <H4>{dados}</H4><DivLine>
          <Name>{DataMe?.firstName}</Name>

          <Email>{DataMe?.email}</Email>

          <DivButton>
            <Button><img src={EditIcons} alt="edit" /></Button>
            <Button><img src={Delet} alt="edit" /></Button>
          </DivButton>
        </DivLine>
        <Divider />
        <ButtonNewProfile title={'Novo Perfil'}/>
        </>

      }





    </Container>

  )
}
