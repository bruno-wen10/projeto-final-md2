import { type } from "os";
import { ReactNode } from "react";


export interface LoginProps {
  id: string;
  name: string
  email: string;
  password: string;
  rememberMe: boolean;
}

interface UserData {
  name: string;
  email: string;
}

export interface AuthContext {

  authenticated: boolean;
  user?: LoginProps | undefined | null;
  login: ({email, password, rememberMe}:UserProps) => void;
  logout: () => void;
}
export interface UserProps {
  email: string;
  password: string;
  rememberMe: boolean;
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
