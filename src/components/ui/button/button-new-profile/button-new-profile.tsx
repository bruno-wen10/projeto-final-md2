//import styled components
import { useNavigate } from 'react-router-dom'
import { TotalUsers } from '../../Components-Pages/Plans/Plans-heard/plans-heard'
import { NewProfile } from '../../Components-Pages/Profile/Edit-Profile/Datas-Profile/datas-profile-styled'
//import context
import { useContextNewPlans } from '@/contexts/Plans/Plans-context'

//import tipagem

type Props = {
  title?: string
}

export const ButtonNewProfile = ({ title }: Props) => {
  const { setShowNewPlan } = useContextNewPlans()
  const navigate = useNavigate()
  return (
    <NewProfile onClick={() => navigate('/Plans-new-plan')}>
      <div>+</div>
      {title}
    </NewProfile>
  )
}
