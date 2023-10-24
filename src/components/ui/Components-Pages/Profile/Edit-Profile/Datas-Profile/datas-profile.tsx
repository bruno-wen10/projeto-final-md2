// import tipagem
import { Me } from '@/Types/TypeRouter'
import { ButtonProps } from '../edit-profile'
//import styled components
import {
  Button,
  DivButton,
  DivLine,
  Divider,
  Email,
  H4,
  Name
} from './datas-profile-styled'
//import Icons
import EditIcons from '../../icons/Edit.png'
import Delet from '../../icons/Delet.png'
//import react
import { useContext, useEffect, useState } from 'react'
//import Context
import { useMeContex } from '@/contexts/Route-Me/Me'

interface DadosProps {
  dados: string
}

export const DatasProfile = ({ dados }: DadosProps) => {
  const DataMe = useMeContex()

  return (
    <>
      <H4>{dados}</H4>
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
    </>
  )
}
