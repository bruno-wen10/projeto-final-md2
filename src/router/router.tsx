import { Suspense, useContext } from 'react'
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  Navigate,
  createBrowserRouter
} from 'react-router-dom'

// PAGES
import Home from '@/pages/home'
import Contact from '@/pages/contact'
import { Spinner } from '@/components/ui'
import { BaseLayout } from '@/components/BaseLayout/base-layout'
import { LoginPage } from '@/pages/login'
import { ProviderAuth, } from '@/components/Login/LoginInputs/contexts/context'
import { Children } from './TypeRouter'
import { ContextAuth } from '@/components/Login/LoginInputs/contexts/context'

// !!user -- variável seja avaliada como um valor booleano
//A notação !! é uma forma concisa de avaliar uma variável como um valor booleano.
export default function Router() {
  const Private = ({children}:Children) =>{
     const {authenticated}= useContext(ContextAuth)
     return authenticated? <>{children}</>:<Navigate to={'/login'}/>
  }
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
      <ProviderAuth> {/* As propriedades de ProviderAuth estão sendo passadas pelo 'context.tsx' */}
        <Routes>
        <Route element={<LoginPage />} path="/login" />
          <Route element={<Private>
            <BaseLayout/>
            </Private>} path="/">

          </Route>

        </Routes>
      </ProviderAuth>
      </BrowserRouter>
    </Suspense>
  )
}
