import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
/* --- Local --- */
import { RegionTop, RegionFooter } from 'core'

export default function PageTemplate({ data: { mdx } }) {
  return (
    <>
      <A.Flex between column flex={1} minHeight='100vh'>
        <RegionTop bg='#1e1e2d' color='white' borderBottom='3px solid #dc448d' p={2} />
        {
          mdx.frontmatter.imageCover &&
          <A.Box color='white' gradient='blueDark' py={6} textCenter>
            <A.BackgroundImage ratio={.5} opacity={.3} src={mdx.frontmatter.imageCover} />
            <A.Heading xxl heavy>{mdx.frontmatter.title}</A.Heading>
            <A.Heading md>{mdx.frontmatter.tagline}</A.Heading>

            <A.Link to='/articles'>
              <A.Span xs mt={4} tag='white'>Back to Articles</A.Span>
            </A.Link>
          </A.Box>
        }
        <A.Box as='main' flex={1} py={3}>
          <A.Container maxWidth={1020}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </A.Container>
        </A.Box>
        <RegionFooter bg='#1e1e2d' color='white' borderTop='3px solid #dc448d' p={2}/>
      </A.Flex>
    </>
  )
}

export const pageQuery = graphql`
  query ArticlePostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        tagline
        image
      }
    }
  }
`