import { Outlet } from 'react-router-dom'

export const BaseLayout = () => {
  return (
    <section>
      <nav>Menu</nav>
      <article>
        <header>--------------</header>
        <main>
          <Outlet />
        </main>
      </article>
    </section>
  )
}
