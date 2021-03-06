import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    site {
      info:siteMetadata {
        author
        data
        description
        title
        person {
          name
          age
        }
      }
    }
  }
`
const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>Title: {title}</h1>
      <h1>Name: {name}</h1>
    </div>
  )
}

export default Header
