//import react
import { ReactNode, useEffect, useState } from 'react'
//import api
import getPlans from '@/api/Plans/Plans-api'
//import type
import { Plan } from '@/Types/Plans/type-plans'
import { TableComponent } from '@/components/ui/table/ReceptTable/myTable'
//import icons
import eyes from './icons/eyes.png'
import delet from './icons/delet.png'
import edit from './icons/edit.png'
//import styled component
import { DivSwitch, Input, InputCheckbox, Section } from './table-plans-styled'
import { Navigate } from 'react-router-dom'
export type PlanTable = {
  planTitle: string
  values: number
  enabled: ReactNode
  actions: ReactNode
}

export const PlanTable = () => {
  const [plans, setPlans] = useState<PlanTable[]>([])

  const columns = ['Periodo', 'Valor', 'Preço promocional', 'Situação', 'Ações']

  useEffect(() => {
    const fetchPlans = async () => {
      const result = await getPlans()

      const Plans= result?.reduce((accumulator, currentValue) => {
        const PlansTable = {
          planTitle: currentValue?.planTitle ? currentValue.planTitle : '-',
          values: currentValue.values,
          enabled: (
            <Section>
              <DivSwitch>
                <InputCheckbox>
                  <Input type="checkbox" checked={currentValue.enabled} />
                  <label>{currentValue.enabled ? 'Ativo' : 'Inativo'}</label>
                </InputCheckbox>
              </DivSwitch>
            </Section>
          ),
          actions: (
            <div>
              <button /* onClick={()=>Navigate(`${currentValue.id}`)} */>
                <img src={eyes} alt="viw" />
              </button>
              <button /* onClick={()=>Navigate(`plans/edit${currentValue.id}`)} */
              >
                <img src={edit} alt="Edit" />
              </button>
              <button /* onClick={()=>modalDelet(currentValue.id)} */>
                <img src={delet} alt="Delet" />
              </button>
            </div>
          )
        }
        return [...accumulator, PlansTable]
      }, [] as PlanTable[])
      setPlans(Plans ?? [])

      console.log(plans)
    }
  }, [])

  return (
    <>
      <TableComponent columns={columns} datesTable={plans} />
    </>
  )
}

