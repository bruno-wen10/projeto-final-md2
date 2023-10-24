import { useState } from 'react'
import {
  DivSwitch,
  Input,
  InputCheckbox,
  Label,
  Section,
  Span
} from '../Components-Pages/Plans/plans-table/table-plans-styled'

export const CheckboxToggle = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  return (
    <Section>
      <DivSwitch>
        <div>
          <Label>Situação</Label>
          <InputCheckbox>
            <Input type="checkbox" checked={checked} onChange={handleChange} />
            <Span>{checked ? 'Ativo' : 'Inativo'}</Span>
          </InputCheckbox>
        </div>
      </DivSwitch>
    </Section>
  )
}
