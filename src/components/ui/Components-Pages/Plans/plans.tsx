//import styled components
import { ContainerPlans, Planos } from './plans-styled'
//import Componente
import { PlansHeard } from './Plans-heard/plans-heard'
import { PlansNew } from './New-Plans/plans-new'
//IMPORT REACT
import { useEffect, useState } from 'react'
//import context
import { useContextNewPlans } from '@/contexts/Plans/Plans-context'

export const PlansReceived = () => {
  const { showNewPlan } = useContextNewPlans()
  return (
    <ContainerPlans>
      <Planos>Planos</Planos>
      <div>
        <PlansHeard />
      </div>
    </ContainerPlans>
  )
}
