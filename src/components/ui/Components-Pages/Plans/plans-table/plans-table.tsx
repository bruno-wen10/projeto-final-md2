//import styled component
import {
  DivHeard,
  DivSearch,
  DivcontainerTable,
  Img
} from './plans-table-styled'
//IMPORT ICONS
import FilterIcons from './icons/Filter.png'
//IMPORT COMPONENTS
import InputPesquisa from '@/components/ui/inputs/inputSearch/inputSearch'
import { PlanTable } from './table-plans'
import { TableComponent } from '@/components/ui/table/ReceptTable/myTable'
import { ButtonNewProfile } from '@/components/ui/button/button-new-profile/button-new-profile'
//IMPORT CONTEXT
import { userContextSearchTable } from '@/contexts/user-register/user-resgist-search'
//IMPORT REACT
import { useState } from 'react'
//IMPORT TIPAGEM
import { TotalUsers } from '../Plans-heard/plans-heard'

//Array heard teble

export const PlansTable = () => {
  const { onSearch, searchResults } = userContextSearchTable() //criar outro context

  return (
    <DivcontainerTable>
      <DivHeard>
        <DivSearch>
          <InputPesquisa onSearch={onSearch} />
          <span>
            <Img src={FilterIcons} alt="filter" />
          </span>
        </DivSearch>

        <ButtonNewProfile title={'Novo Plano'} />
      </DivHeard>

      <PlanTable />
    </DivcontainerTable>
  )
}
