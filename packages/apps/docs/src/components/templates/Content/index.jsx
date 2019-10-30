import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
/* --- Local --- */
import { RegionTop, RegionFooter } from 'core'

export default function PageTemplate({ data: { mdx } }) {

  return (
    !mdx ? null :
    <>
      <A.Flex between column flex={1} minHeight='100vh'>
        <RegionTop bg='#1e1e2d' color='white' borderBottom='3px solid #dc448d' p={2} />
        {
          mdx.frontmatter.cover &&
          <A.Box color='white' gradient='blueDark' py={6} textCenter>
            <A.BackgroundImage src={mdx.frontmatter.cover} opacity={.3} />
            <A.Heading xxl heavy>{mdx.frontmatter.title}</A.Heading>
            <A.Heading md>{mdx.frontmatter.tagline}</A.Heading>
          </A.Box>
        }
        <A.Box as='main' flex={1} py={3}>
          <Atom.Container>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </Atom.Container>
        </A.Box>
        <RegionFooter bg='#1e1e2d' color='white' borderTop='3px solid #dc448d' p={2}/>
      </A.Flex>
    </>
  )
}

export const pageQuery = graphql`
  query ContentPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        tagline
      }
    }
  }
`