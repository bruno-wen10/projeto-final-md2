import { Children } from '@/contexts/login/contextLogin'
import { createContext, useContext, useState } from 'react'

// Contexto
type ContextType = {
  selectedRows: string[]
  handleCheckboxChange: (id: string) => void
}

const initialContext: ContextType = {
  selectedRows: [],
  handleCheckboxChange: () => {}
}

const PlansTableContext = createContext<ContextType>(initialContext)

export const PlansTableContextProvider = ({ children }: Children) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([])

  const handleCheckboxChange = (id: string) => {
    const currentIndex = selectedRows.indexOf(id)
    const newSelectedRows: string[] = [...selectedRows]

    if (currentIndex === -1) {
      newSelectedRows.push(id)
    } else {
      newSelectedRows.splice(currentIndex, 1)
    }

    setSelectedRows(newSelectedRows)
  }

  return (
    <PlansTableContext.Provider value={{ selectedRows, handleCheckboxChange }}>
      {children}
    </PlansTableContext.Provider>
  )
}

export const useTablePlansContext = () => useContext(PlansTableContext)
