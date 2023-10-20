//import react
import axios from "axios"
import { type } from "os"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
//import context
import { UserTableRegistered, Userscontext } from "@/contexts/user-register/user-registered-table"
export type Page ={
  setPage: Dispatch<SetStateAction<number>>
}


export const Pagnation = () => {


const {setPage} = UserTableRegistered()


  return (

    <div>
      <button onClick={()=>setPage(1)}>1</button>
      <button onClick={()=>setPage(2)}>2</button>
      <button onClick={()=>setPage(3)}>3</button>
    </div>
  )
}


