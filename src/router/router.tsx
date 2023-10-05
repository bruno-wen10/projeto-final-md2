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
import BaseLayout from '@/components/BaseLayout/baseLayout'
import Dashboard from '@/pages/Dashboard'
import UserRegistered from '@/pages/User-registered'
import Plans from '@/pages/Plans'
import Specialties from '@/pages/Specialties'
import Notification from '@/pages/Notification'
import FAQ from '@/pages/FAQ'
//
import { Spinner } from '@/components/ui'
import { LoginPage } from '@/pages/login'
import { Children } from './TypeRouter'
import { ProviderAuth } from '@/contexts/context'



// !!user -- variável seja avaliada como um valor booleano
//A notação !! é uma forma concisa de avaliar uma variável como um valor booleano.
export default function Router() {


  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
      <ProviderAuth> {/* As propriedades de ProviderAuth estão sendo passadas pelo 'context.tsx' */}
        <Routes>
        <Route element={<LoginPage />} path="/login" />


              <Route element={<BaseLayout/>} path='/'>

                 <Route element={<Dashboard />} path='/' />
                 <Route element={<UserRegistered/>} path='/User-registered' />
                 <Route element={<Plans/>} path='/Plans'/>
                 <Route element={<Specialties/>} path='/Specialties'/>
                 <Route element={<Notification/>} path='/Notification'/>
                 <Route element={<FAQ/>} path='/FAQ'/>


              </Route>


        </Routes>
      </ProviderAuth>
      </BrowserRouter>
    </Suspense>
  )
}
