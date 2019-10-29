import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"
    const data = this.props.data.allFile.edges[0].node.childMdx.frontmatter
    const dataBody = this.props.data.allFile.edges[0].node.childMdx.body

    return (
      <Layout location={this.props.location} title={data.title}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* <pre>{JSON.stringify(this.props.data, null, 4)}</pre> */}
        <img style={{ margin: 0 }} src={data.image} alt="Gatsby Scene" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <MDXRenderer>{dataBody}</MDXRenderer>
        <p>Now go build something great!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
query {
  allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
    edges {
      node {
        childMdx {
          frontmatter {
            title
            description
            intro
            image
          }
          body
      }
    }
  }
}
}`
// export const query = graphql`
//   query {
//     allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
//       edges {
//         node {
//           childMarkdownRemark {
//             frontmatter {
//               title
//               intro
//               image
//           }
//           excerpt
//         }
//       }
//     }
//   }
// }`
