import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Image from 'gatsby-image';
const AllImages = () => {
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
    query newQuery {
      allImageSharp {
        nodes {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    console.log(nodes);
    return <Layout>
        {
            nodes.map(({ fluid }, i) => {
                console.log(fluid);
                return <Image fluid={fluid} key={i}/>
            })
        }
        
  </Layout>
}

export default AllImages
