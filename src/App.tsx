import Router from './router/router'
import GlobalStyles from '@/assets/styles/global-styles'
import { LoginContainer } from './components/Login/login'
import Layout  from './components/BaseLayout/baseLayout'
import { OutUser } from './components/BaseLayout/header/out&user'
import { ApiLogin } from './api/Api-login'


function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
      <ApiLogin/>

    </>
  )
}

export default App
