import { ReactNode } from "react";


export interface LoginProps {
  id: string;
  email: string;
  password: string;
  rememberMe: boolean;
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
  email: string
}

/* export interface AuthContextType {
  authenticated: boolean;
  login: ({email, password, rememberMe}:UserProps) => void;
  logout: () => void;
}
 */
