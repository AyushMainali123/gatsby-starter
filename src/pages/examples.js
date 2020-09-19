import React from 'react'
import Header from '../components/examples/Header'
import Layout from '../components/Layout'

const Examples = ({data}) => {
    console.log(data);
    return (
        <Layout>
            <div> Hello from examples</div>
            <Header />
        </Layout>
    )
}

export const data = graphql`
{    
    site {
      siteMetadata {
        author
        data
        description
        title
      }
    }
  }
`
export default Examples
