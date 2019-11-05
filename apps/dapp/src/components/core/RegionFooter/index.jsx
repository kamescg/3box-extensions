
/**
 * @name Footer
 * @description Default Top Footer region component.
 */
import { Link } from '@reach/router'
/* --- Global --- */


const Footer = props => {
  return (
    <Atom.Flex alignCenter between sx={{ variant: 'regions.footer' }}>
      {/* Left */}
      <Atom.Flex alignCenter>
        <Link to='/'>
          <Atom.Heading sm heavy mb={0}>{GLOBAL.siteName}</Atom.Heading>
        </Link>
      </Atom.Flex>

      {/* Right */}

      <Atom.Flex alignCenter>
        <a href='https://github.com/kamescg'>
          <Atom.Span sx={{fontSize: 1}}>Built by Kames</Atom.Span>
        </a>
      </Atom.Flex>
    </Atom.Flex>
  )
}

export default Footer