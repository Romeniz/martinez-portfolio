
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header className="site-header">
        <Link to="/" className="brand">Jerome.dev</Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>© 2026 Jerome Martinez | React Portfolio</p>
      </footer>
    </>
  )
}

export default Layout
