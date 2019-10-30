
import { useStaticQuery, graphql } from "gatsby"
const SiteMetaData = ({ children }) => {
const data = useStaticQuery(graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

return (
  React.cloneElement(children, { data })
)}

export default SiteMetaData