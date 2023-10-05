import { type } from "os";
import { ReactNode } from "react";


export interface LoginProps {

  email: string;
  password: string;

}

interface UserData {
  name: string;
  email: string;
}

export interface AuthContext {


  user?: LoginProps | undefined | null;
  login: ({email, password}:UserProps) => void;
  logout: () => void;
}
export interface UserProps {
  email: string;
  password: string;

}
export type Children ={
  children: ReactNode
}
export type LoggedUser ={
  id: number | string
  name: string
  email: string
}

/* export interface AuthContextType {
  authenticated: boolean;
  login: ({email, password, rememberMe}:UserProps) => void;
  logout: () => void;
}
 */
