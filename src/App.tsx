import Router from './router/router'
import GlobalStyles from '@/assets/styles/global-styles'
/* import { ApiLogin } from './api/Api-login' */
import {useApiLogin} from './api/Login/Api-login-token'


function App() {
  return (
    <>
      <GlobalStyles />
      <Router />



    </>
  )
}

export default App
