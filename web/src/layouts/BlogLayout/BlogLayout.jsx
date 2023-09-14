import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const BlogLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Gui Blog</Link>
        </h1>
        {isAuthenticated ? (
          <div>
            <span>logged in as {currentUser.email}</span>{' '}
            <button type="button" onClick={logOut}>
              LogOut
            </button>
          </div>
        ) : (
          <Link to={routes.login()}>login</Link>
        )}

        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>About</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
