import { type } from "os"
import { title } from "process"
import { ReactNode } from "react"

// styled component Table
import {
  Table,
  THeader,
  Td,
  TBody,
  TableRow,
  TdBody
} from './dateTable/myTable'


//Record<string, ReactNode> define um objeto onde as chaves são strings e os valores são do tipo ReactNode. ReactNode
//é um tipo que pode representar qualquer coisa renderizável em React, como texto,
//elementos React, componentes, etc.
type TableRow = Record<string, string | number | ReactNode>

type TableDateProps = {
  columns: string[]
  datesTable: TableRow[]
}


export const TableComponent = ({columns, datesTable}:TableDateProps)=> {

   return (
    <Table>
      <THeader>
        <tr>
        {/* Object.keys() é uma função JavaScript que retorna um array contendo as chaves (nomes das propriedades) de um objeto. Neste contexto, estamos usando data[0] para obter as chaves do primeiro objeto no array data, que representa a primeira linha de dados na tabela. */}
        {columns.map((columText)=>(
          <Td>{columText}</Td>
        ))}


        </tr>
      </THeader>
      <tbody>
      {datesTable.map((information)=>(
        <TableRow>
          {Object.values(information).map((dateLine)=>(
            <TdBody>{dateLine}</TdBody>
          ))}
        </TableRow>
      ))}
      </tbody>
    </Table>

   )
 }




