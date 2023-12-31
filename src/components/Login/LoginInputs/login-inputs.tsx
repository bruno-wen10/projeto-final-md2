import { Button } from '@/components/ui'
import {useState, useContext } from 'react'


import EyeOff from './icons/eye-off-line.png'
import Eye from './icons/eyes.png'
/* import { InputEmail } from '../forms/input' */
import {
  H3,
  DivContainer,
  DivTitle,
  H1Title,
  Section,
  DivInputLabelCheckbox,
  DivLabelIput,
  LabelLembreMe,
  Paragrafo,
  Span,
  Divcontainer3
} from './login-input-styled'
import { ContextAuth } from '@/contexts/login/contextLogin'
import { useNavigate } from 'react-router-dom'
import { Inputs } from '@/components/ui/forms/input-Login/input'


export const LoginInputs = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
 const {login} = useContext(ContextAuth)
const navigate = useNavigate()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('Submit', { email, password })
    const result = await login(email, password)
    if(result){
      navigate('/')
    }

  }
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)

  }

  const handleRememberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked)
  }

  const togglePasswordView = () => {
    setShowPassword(!showPassword)
  }

  return (
    <DivContainer>

        <DivTitle>
          <H3>Seja bem vindo!</H3>
          <H1Title>Realize seu Login</H1Title>

        </DivTitle>

        <form onSubmit={handleSubmit}>
          <Section>
            <Inputs label={'E-mail'} id={'email'}
            type='text'
            name='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='Insira seu email'
            />

            <Inputs label={'Senha'} id={'password'}
            type={showPassword? 'text': 'password'}
            name='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder={'Insira sua senha'}
            />
                <Span onClick={togglePasswordView}>
                  {showPassword ?<img src={Eye} alt="Open Eye" /> : <img src={EyeOff} alt="Off Eye" /> }
                </Span>

          </Section>



         <Divcontainer3>
           <DivInputLabelCheckbox>
             <DivLabelIput>

            <input
              type="checkbox"
                checked={rememberMe}
              onChange={handleRememberChange}
            />
            <LabelLembreMe>
            Lembre-me
            </LabelLembreMe>
             </DivLabelIput>
             <Paragrafo>Esqueci minha senha</Paragrafo>
           </DivInputLabelCheckbox>

           <Button type='submit' label={''} id={''}>Entrar</Button>
         </Divcontainer3>

        </form>

    </DivContainer>
  )
}



