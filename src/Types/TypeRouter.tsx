import { type } from "os";

export type User = {
  id: number
  name: string
  email: string
  password?: string
}

//Type router - /me (user)

export interface Me  {

  email: string,
  enabled: boolean
  firstName: string,
  id: number,
  lastName: string,
  profiles: MeUser[],

}
export interface MeUser {

    id: number,
    name: string,
    authority: string

}

