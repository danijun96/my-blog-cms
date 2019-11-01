/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

function Bio({data}) {
  const dataQuery = data
  return (
    <>
    <StaticQuery
      query={query}
      render={query => {
        // const { author, social } = data.site.siteMetadata
        return (
          <Container>
            {/* <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Written by <strong>{author}</strong> who lives and works in San
              Francisco building useful things.
              {` `}
              <a href={`https://twitter.com/${social.twitter}`}>
                You should follow him on Twitter
              </a>
            </p> */}
          <pre>{JSON.stringify(query.allMdx.edges[10].node.frontmatter, null, 4)}</pre>
          {console.log(query)}
          </Container>
        )
      }}
    />
    </>
  )
}

export const query = graphql`
{
  allMdx {
    edges {
      node {
        frontmatter {
          Bio
        }
      }
    }
  }
}

`
// const bioQuery = graphql`
//   query BioQuery {
//     avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
//       childImageSharp {
//         fixed(width: 50, height: 50) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         author
//         social {
//           twitter
//         }
//       }
//     }
//   }
// `

const Container = styled.div`
  display: flex;
`

export default Bio

