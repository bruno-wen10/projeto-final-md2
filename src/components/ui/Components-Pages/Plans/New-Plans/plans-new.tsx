import { ExitPage2 } from '@/components/ui/ExitPage/Exit2/ExitPage2'
import { DataPlans } from './Data-Plans/data-plans'

export const PlansNew = () => {
  return (
    <div>
      <ExitPage2 page={'Novo plano - contratante'} linkNavigate={'/Plans'} />
      <DataPlans />
    </div>
  )
}
