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
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
              }}
              to={`/`}
            >
              <LogoSvg />
            </Link>
          </h1>
      )
    } else {
      header = (
        <div style={{display: 'flex'}}>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              fontWeight: 600,
              marginTop: 0,
              marginRight: 'auto',
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
              }}
              to={`/`}
            >
              <LogoSvg small/>
            </Link>
          </h3>
          <NavBar />
        </div>
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
        <header>{header}</header>
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
