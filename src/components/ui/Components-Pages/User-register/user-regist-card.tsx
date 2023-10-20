//import Styled componts
import S from './user-regist-card-S'
import {
  DivTitle,
  SpanTitle,
  SpanTotal
} from '@/pages/User-registered/User-regist-Styled'
//import React
import { useState } from 'react'
import { useUserContext } from '../../../../contexts/user-register/user-regist-total-user';
//import components
import SearchTable from './Search&Table/Search&table';
// import Type
import { type } from 'os'





export type TotalUsers = {
  total: number
  contractors: number
  doctors: number
}
//------------------------------------
export default function UsersRegistersTotal() {

  const { userData } = useUserContext();
  const [click, setClicked] = useState<string | null>("total")

  const handleClick = (string: string) => {
    setClicked(string)
  }
                //------------------------------------

  return (
    <>
      <DivTitle>
        <SpanTitle>Usuarios Cadastrados |</SpanTitle>
        {click === 'total' ? <SpanTotal>Total</SpanTotal> : null}
        {click === 'contratante' ? <SpanTotal>Contratante</SpanTotal> : null}
        {click === 'medico' ? <SpanTotal>Médicos</SpanTotal> : null}
      </DivTitle>

      <S.DivContainer>

        <S.ClickableDiv clicked={click === 'total'} onClick={() => handleClick('total')}>
          <span>Todos</span>

          <S.NumberTotal clicked={click === 'total'}>{userData.total}</S.NumberTotal>
        </S.ClickableDiv>


        <S.ClickableDiv clicked={click === 'contratante'} onClick={() => handleClick('contratante')}>
          <span>Contratantes</span>

          <S.NumberTotal clicked={click === 'contratante'}>{userData.totalContractor}</S.NumberTotal>
        </S.ClickableDiv>

        <S.ClickableDiv clicked={click === 'medico'} onClick={() => handleClick('medico')}>

          <span>Médicos</span>

          <S.NumberTotal clicked={click === 'medico'}>{userData.totalDoctors}</S.NumberTotal>
        </S.ClickableDiv>
      </S.DivContainer>

      <SearchTable type={click === 'total' ?userData.total  : click === 'contratante' ? userData.totalContractor : userData.totalDoctors} datesTable={[]} columns={[]} />




    </>
  )
}
