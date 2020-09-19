import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
const products = ({ data }) => {
  const {
    products: { nodes },
  } = data
  return <Layout>Hey</Layout>
}

export const query = graphql`
  query details {
    products: allContentfulProduct {
      nodes {
        slug
        image {
          fluid {
            src
          }
          title
        }
        price
        info {
          info
        }
      }
    }
  }
`

export default products
