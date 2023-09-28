import Router from './router/router'
import GlobalStyles from '@/assets/styles/global-styles'
import { LoginContainer } from './components/Login/login'
import Layout  from './components/BaseLayout/baseLayout'
import { OutUser } from './components/BaseLayout/header/out&user'

function App() {
  return (
    <>
      <GlobalStyles />

      <Layout/>
      {/* <Router /> */}
    </>
  )
}

export default App
