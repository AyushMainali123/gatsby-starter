import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

const products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  console.log(products)
  return (
    <Layout>
      <section>
        {products.map(product => {
            return (
              <article key={product.id}>
                <div className="imageContainer" style={{ width: 200 }}>
                  <Image fluid={product.image.fluid} alt="Product Title" />
                </div>

                <h3>
                  {product.title}
                        <span>${product.price}</span>
                    </h3>
                    <Link to={`/products/${product.slug}`}>
                        More Details
                    </Link>
              </article>
            )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        price
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
        id
      }
    }
  }
`

export default products
