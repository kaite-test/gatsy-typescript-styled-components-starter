import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Header from "./header"

const GlobalStyle = createGlobalStyle`

html{
  font-family:sans-serif;
  box-sizing:border-box;
}
body{
  margin:0;
  color: hsla(0, 0%, 0%, 0.8);
  font-family: georgia, serif;
  font-weight: normal
}
*,*::before, *::after{
  box-sizing:inherit;
}
a {
  background-color: transparent;
}
a:active,
a:hover {
  opacity:0.7;
}

`

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
