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
import Dashboard from '@/pages/Dasboard/Dashboard'
import UserRegistered from '../pages/User-registered/User-registered'
import Plans from '@/pages/Plans/Plans'
import Specialties from '@/pages/Specialties'
import Notification from '@/pages/Notification'
import FAQ from '@/pages/FAQ'
import { Spinner } from '@/components/ui'
import { LoginPage } from '@/pages/login'
// IMPORT CONTEXT'S
import { ProviderAuth } from '@/contexts/login/contextLogin'
import { UserProvider } from '@/contexts/user-register/user-regist-total-user'
import { ProvaiderContextTableUsers } from '@/contexts/user-register/user-registered-table'
import { SearchProvider } from '@/contexts/user-register/user-resgist-search'
import { UserRegisteredShow } from '@/pages/User-registered/User-registered-Show-user'
import { Profile } from '@/pages/Profile/Profile'
import { MeContextProvider } from '@/contexts/Route-Me/Me'
import { ContextNewPlansProvider } from '@/contexts/Plans/Plans-context'
import { PlansTableContextProvider } from '@/contexts/Plans/context-table/Plans-context-table'
import { PlansNewPlan } from '@/pages/Plans/Plans-new-plan'



export default function Router() {


  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <ProviderAuth>
          <UserProvider>
            <ProvaiderContextTableUsers>

              <SearchProvider>

                <MeContextProvider>

                  <ContextNewPlansProvider>

                   <PlansTableContextProvider>

                   <Routes>
                <Route element={<LoginPage />} path="/login" />

                <Route element={<BaseLayout />} path="/">
                  <Route element={<Dashboard />} path="/" />
                  <Route element={<UserRegistered />} path="/User-registered" />
                  <Route element={<UserRegisteredShow/>} path='/User-registered-Show-User'/>
                  <Route element={<Profile/>} path='/Profile'/>
                  <Route element={<Plans />} path="/Plans" />
                  <Route element={<PlansNewPlan />} path="/Plans-new-plan" />
                  <Route element={<Specialties />} path="/Specialties" />
                  <Route element={<Notification />} path="/Notification" />
                  <Route element={<FAQ />} path="/FAQ" />
                </Route>
              </Routes>

                   </PlansTableContextProvider>



                  </ContextNewPlansProvider>

                </MeContextProvider>

              </SearchProvider>

            </ProvaiderContextTableUsers>
          </UserProvider>
        </ProviderAuth>
      </BrowserRouter>
    </Suspense>
  )
}
