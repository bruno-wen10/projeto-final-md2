import { type } from 'os'
import { title } from 'process'
import { ReactNode, useState } from 'react'
import { MappedUser } from './ReceptTable'
// styled component Table
import {
  Table,
  THeader,
  Th,
  TBody,
  TableRow,
  TdBody
} from './dateTable/myTable'
import { Pagnation } from '../../paginação/pagnation'
import { PlanTable } from '../../Components-Pages/Plans/plans-table/table-plans'

//Record<string, ReactNode> define um objeto onde as chaves são strings e os valores são do tipo ReactNode. ReactNode
//é um tipo que pode representar qualquer coisa renderizável em React, como texto,
//elementos React, componentes, etc.

type TableDateProps = {
  columns: string[]
  datesTable: MappedUser[] | PlanTable[]
}

export const TableComponent = ({ columns, datesTable }: TableDateProps) => {
  return (
    <Table>
      <THeader>
        <tr>
          {columns.map((columText, index) => (
            <Th key={`${index}-tr`}>{columText}</Th>
          ))}
        </tr>
      </THeader>

      <tbody>
        {datesTable.map((information, index) => (
          <TableRow key={`${index}-tr`}>
            {Object.values(information).map((dateLine, index) => (
              <TdBody key={`${index}-td`}>{dateLine}</TdBody>
            ))}
          </TableRow>
        ))}
      </tbody>
      {/* <Pagnation /> */}
    </Table>
  )
}
