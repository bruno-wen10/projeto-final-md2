//import react
import { createContext, useContext, useState } from "react";
//import tipagem
import { Children } from "../login/contextLogin";

type Propscontext = {
  showNewPlan:boolean
  setShowNewPlan: (arg0: boolean)=>void

}


export const contextNewPlans = createContext<Propscontext| undefined>(undefined)


export const ContextNewPlansProvider = ({ children }:Children) => {

  const [showNewPlan, setShowNewPlan] = useState<boolean>(false);

  return <contextNewPlans.Provider value={{ showNewPlan, setShowNewPlan }}>
    {children}
    </contextNewPlans.Provider>;
};

// Hook personalizado para usar o contexto
export const useContextNewPlans = () => {
  const context = useContext(contextNewPlans);
  if (!context) {
    throw new Error('useMyContext deve ser usado dentro de MyContextProvider');
  }
  return context;
};
