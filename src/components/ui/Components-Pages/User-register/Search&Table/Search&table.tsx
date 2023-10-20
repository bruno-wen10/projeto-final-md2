
//import component
import SearchHeard from '../Search&Heard/Search&Heard';
//import context
import { UserTableRegistered } from '@/contexts/user-register/user-registered-table';

//import type
import { type } from 'os';
import { TotalUsers } from '../user-regist-card';
import { MappedUser } from '@/components/ui/table/ReceptTable/ReceptTable';
//import react
import { useState } from 'react';


export type SearchTableProps = {
  type: TotalUsers[keyof TotalUsers]
  datesTable: MappedUser[]
  columns: string[]
  //keyof é um operador que é usado para criar um tipo que representa as chaves (nomes de propriedades) de um tipo de objeto
}



function SearchTable({ type }:SearchTableProps) {
  // Meu Context
  const {userDatetable, columns} = UserTableRegistered()



  return <SearchHeard type={type} datesTable={userDatetable} columns={columns}  />;
}

export default SearchTable;
