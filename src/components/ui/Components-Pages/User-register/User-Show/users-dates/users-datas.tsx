//import components
import { InputsDatas } from '@/components/ui/forms/input-UserRegister/inputs-datas'

//import styled components
import {
  Container,
  Div,
  Divinputs,
  Span
} from './users-datas-styled'
import { Label } from '@/components/ui/forms/input-UserRegister/inputs-datas-styled'

export default function Usersdatas() {
  return (
    <Container>

        <div>

        <h1>Dados pessoais</h1>
      <Divinputs className="Dados Pessoais">

          <InputsDatas label={"Primeiro nome"} id={""} userName={''} isLarge={false} />
          <InputsDatas label={"Sobrenome"} id={""} userName={''} isLarge={false} />
      </Divinputs>

          <Divinputs className="Dados Pessoais">

          <InputsDatas label={"Email"} id={""} userName={''} isLarge={false} />
          <InputsDatas label={"WhatsApp"} id={""} userName={''} isLarge={false} />
          </Divinputs>

        </div>

     <div>
     <h1>Endereço</h1>
      <Divinputs className="Endereço">
      <InputsDatas label={"CEP"} id={""} userName={''} isLarge={false} />
      <InputsDatas label={"Rua"} id={""} userName={''} isLarge={false} />
      <InputsDatas label={"Número"} id={""} userName={''} isLarge={false} />
      </Divinputs>

      <Divinputs className="Endereço">
      <InputsDatas label={"Bairro"} id={""} userName={''} isLarge={false} />
      <InputsDatas label={"Cidade"} id={""} userName={''} isLarge={false} />
      <InputsDatas label={"Estado"} id={""} userName={''} isLarge={false} />
      </Divinputs>
      <Divinputs className="Endereço">
      <InputsDatas label={"Complemento"} id={""} userName={''} isLarge={false} />
      </Divinputs>
     </div>


     <div>
      <h1>Dados do Currículo</h1>
      <Divinputs className="Dados do Curriculo">
      <InputsDatas label={"Especialidades"} id={""} userName={''} isLarge={false} />
      <InputsDatas label={"Cidades que deseja tabalhar"} id={""} userName={''} isLarge={false} />
      <InputsDatas label={"Email"} id={""} userName={''} isLarge={false} />

      </Divinputs>

      <Span>Disponibiliade de dia e horário</Span>

      <div>
      <Div><input type="checkbox" />Domingo</Div>

      <div style={{paddingLeft:'20px', paddingTop:'2px', width:'20%'}}>
      <Div><input type="checkbox" />Manhã</Div>
      <Div><input type="checkbox" />Tarde</Div>
      <Div><input type="checkbox" />Noite</Div>
      </div>

      <div style={{paddingTop:'2px', width:'20%'}}>
      <hr/>
      <Div><input type="checkbox" />Sexta</Div>
      <hr/>
      <Div><input type="checkbox" />Sábado</Div>
      <hr/>
      </div>

      <Divinputs>
      <InputsDatas label={"Sobre"} id={""} userName={''} isLarge={true}   />

      <InputsDatas label={"Observações"} id={""} userName={''} isLarge={true} />

      </Divinputs>


      </div>

     </div>



      <div>
      <h1>Planos</h1>

      <Divinputs className="Planos">
        <Span>Plano X - R$ 200,00</Span>
      </Divinputs>

     </div>

    </Container>
  )
}
