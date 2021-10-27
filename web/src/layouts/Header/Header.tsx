import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type HeaderLayoutProps = {
  children: React.ReactNode
}

const HeaderLayout = ({ children }: HeaderLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <Link to={routes.home()} className="rw-link">
          Home
        </Link>
        <Link to={routes.posts()} className="rw-link">
          Post
        </Link>
        <Link to={routes.contact()} className="rw-link">
          Contact
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default HeaderLayout
