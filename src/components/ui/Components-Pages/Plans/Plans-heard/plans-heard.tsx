// import styled componest
import { PlansTable } from '../plans-table/plans-table'

//import react
import { useState } from 'react'
//import context
import { useUserContext } from '@/contexts/user-register/user-regist-total-user'
import { ClickableDiv, DivContainer, NumberTotal } from './plans-heard-styled'
//import type

export type TotalUsers = {
  contractors?: number
  doctors?: number
}

export const PlansHeard = () => {
  //trocar api
  const { userData } = useUserContext()
  const [click, setClicked] = useState<string | null>('medico')

  const handleClick = (string: string) => {
    setClicked(string)
  }

  return (
    <>
      <DivContainer>
        <ClickableDiv
          clicked={click === 'medico'}
          onClick={() => handleClick('medico')}
        >
          <span>Médicos</span>

          <NumberTotal clicked={click === 'medico'}>
            {userData.totalDoctors}
          </NumberTotal>
        </ClickableDiv>

        <ClickableDiv
          clicked={click === 'contratante'}
          onClick={() => handleClick('contratante')}
        >
          <span>Contratantes</span>

          <NumberTotal clicked={click === 'contratante'}>
            {userData.totalContractor}
          </NumberTotal>
        </ClickableDiv>
      </DivContainer>

      <PlansTable />
    </>
  )
}
