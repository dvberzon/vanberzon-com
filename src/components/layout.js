import React from "react"
import { Link } from "gatsby"
import { LogoSvg } from "./logo.svg"
import NavBar from "./navbar"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <header>
          <h1>
            <Link
              style={{
                ...scale(1.5),
                marginBottom: rhythm(2),
                boxShadow: `none`,
                textDecoration: `none`,
              }}
              to={`/`}
            >
              <LogoSvg />
            </Link>
          </h1>
        </header>
      )
    } else {
      header = (
        <header className="header-small">
          <Link
            className="logo"
            to={`/`}
          >
            <LogoSvg small/>
          </Link>
          <NavBar path={location.pathname}/>
        </header>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(27),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()},
          {` `}
          <a href="mailto:info@vanberzon.com">Daniel van Berzon</a>
        </footer>
      </div>
    )
  }
}

export default Layout
