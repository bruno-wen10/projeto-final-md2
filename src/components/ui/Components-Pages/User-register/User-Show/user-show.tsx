//import components
import { Datas } from '@/components/ui/ExitPage/user-show-styled'
import Usersdatas from './users-dates/users-datas'
import { ExitPage } from '@/components/ui/ExitPage/exit-page'

export const ShowUser = () => {
  return (
    <>
      <ExitPage page={'Usuário'} />

      <Datas>
        <Usersdatas />
      </Datas>
    </>
  )
}
