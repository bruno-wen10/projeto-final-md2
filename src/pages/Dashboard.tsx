//IMPORT COMPONENTS

import MedicosEContratante from '../components/ui/cardMedicos/componenteMedicos'
import LastUsersDashboard from '@/components/ui/table/ReceptTable/ReceptTable'



export default function Dashboard() {
  return (
          <DivContainer>

          <MedicosEContratante/>




          <LastUsersDashboard/>

          </DivContainer>
  )
}

//IMPORTAÇÃO STYLED-COMPONENTS
import styled from 'styled-components'

const DivContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
