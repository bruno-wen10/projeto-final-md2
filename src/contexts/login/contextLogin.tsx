import { User } from '@/Types/Dasboard/TypeTableUser'

import { useApiLogin } from '@/api/Login/Api-login-token'
import { type } from 'os'
import { ReactNode, createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export type ContextAuthType = {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}
export type Children = {
  children: ReactNode
}
export const ContextAuth = createContext<ContextAuthType>(null!)

export const ProviderAuth = ({ children }: Children) => {
  const [user, setUser] = useState<User | null>(null)
  const api = useApiLogin()
  const navigate = useNavigate()

  const login = async (email: string, password: string) => {
    const data = await api.login(email, password)

    if (data.message === 'Successfully login') {
      localStorage.setItem('token', data.token)
      return true
    }

    return false
  }

  const logout = async () => {
    const navigate = useNavigate()
    await api.logout()
    setUser(null)
    // Remove o token do localStorage
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <ContextAuth.Provider value={{ user, login, logout }}>
      {children}
    </ContextAuth.Provider>
  )
}

export const UserContext = () => {
  const contextUser = useContext(ContextAuth)
  if (!contextUser) {
    throw new Error(
      'UserTableRegistered deve ser usado dentro de um UserProvider'
    )
  }
  return contextUser
}
