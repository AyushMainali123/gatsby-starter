import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/cabnat-1.jpg"
import Image from "gatsby-image"

const getImages = graphql`
  query MyQuery {
    fixed: file(relativePath: { eq: "cabnat-1.jpg" }) {
      childImageSharp {
        fixed(width: 500, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "corona.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Images = () => {
  const { fixed, fluid } = useStaticQuery(getImages)
  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} alt="" width="100%" />
      </article>
      <article className="single-image">
              <Image fixed={fixed.childImageSharp.fixed}/>
      </article>
      <article className="single-image">
              <h3>Fluid Image/svg</h3>
              <Image fluid={fluid.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images
