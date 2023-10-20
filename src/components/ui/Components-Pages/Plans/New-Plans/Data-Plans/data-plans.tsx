import { CheckboxToggle } from "@/components/ui/CheckBox-togglo/checkbox-toggle"
import { Container, Div, H1 } from "./data-plans-styled"
import { InputsEditDatas } from "@/components/ui/inputs/input-Data/inputs-edit-datas"
import InputsDatasOption from "@/components/ui/inputs/input-Data/input-data-option"
import SaveButton from "@/components/ui/button/button-save/button-save"
import { FormEvent, useState } from "react"




interface FormValues {
  tituloPlano: string;
  periodo: string;
  valor: string;
  checkboxValue: boolean;
}

export const DataPlans = () => {

    const [formValues, setFormValues] = useState<FormValues>({
      tituloPlano: '',
      periodo: '',
      valor: '',
      checkboxValue: false,
    });

    const handleInputChange = (fieldName: string, value: string) => {
      setFormValues((prevValues) => ({
        ...prevValues,
        [fieldName]: value,
      }));
    };

    const handleCheckboxChange = (value: boolean) => {
      setFormValues((prevValues) => ({
        ...prevValues,
        checkboxValue: value,
      }));
    };

    const handleFormSubmit = (event: FormEvent) => {
      event.preventDefault();
      // Aqui você pode adicionar lógica para enviar os valores para a API
      // Use formValues para enviar dados para a API

      console.log('Enviando para a API:', formValues);
    };


  return (

    <Container>
      <H1>Dados do Plano</H1>

      <form onSubmit={handleFormSubmit}>

      <Div>
      <InputsEditDatas
          label={"Título do plano"}
          id={""}
          isLarge={false}
          onChange={(value: string) => handleInputChange('tituloPlano', value)}
        />
        <CheckboxToggle onChange={(value: boolean) => handleCheckboxChange(value)} />
        <InputsDatasOption
          label={"Período"}
          id={""}
          isLarge={false}
          options={[]}
          onChange={(value: string) => handleInputChange('periodo', value)}
        />
      </Div>

      <div>
      <InputsEditDatas
          label={"Valor"}
          id={""}
          isLarge={false}
          onChange={(value: string) => handleInputChange('valor', value)}
        />

      <SaveButton onClick={function (): void {
            throw new Error("Function not implemented.")
          } } />

      </div>


      </form>




    </Container>
  )
}
