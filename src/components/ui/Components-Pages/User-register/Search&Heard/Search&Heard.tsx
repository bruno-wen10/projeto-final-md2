//import Components
import { TableComponent } from '@/components/ui/table/ReceptTable/myTable'
//import styled
import {
  DivContainer,
  DivHeard,
  DivcontainerTable,
  Total,
  TotalUser
} from '../user-regist-card-S'
import InputPesquisa from '@/components/ui/inputs/inputSearch/inputSearch'
//import react

import { SearchTableProps } from '../Search&Table/Search&table'
//import context
import { userContextSearchTable } from '@/contexts/user-register/user-resgist-search'

function SearchHeard({ type, datesTable, columns }: SearchTableProps) {
  const { onSearch, searchResults } = userContextSearchTable()
  const renderedDateTable =
    searchResults.length > 0 ? searchResults : datesTable

  return (
    <DivcontainerTable>
      <DivHeard>
        <InputPesquisa onSearch={onSearch} />

        <div>
          <TotalUser>Total de usuários</TotalUser>
          <Total>{type}</Total>
        </div>
      </DivHeard>

      <TableComponent columns={columns} datesTable={renderedDateTable} />
    </DivcontainerTable>
  )
}

export default SearchHeard
