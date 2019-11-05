
/**
 * @name Footer
 * @description Default Top Footer region component.
 */
import { Link } from '@reach/router'
/* --- Global --- */


const Footer = props => {
  return (
    <Atom.Flex alignCenter between sx={{ variant: 'layout.header' }}>
      {/* Left */}
      <Atom.Flex alignCenter>
        <Link to='/'>
          <Atom.Heading sm heavy mb={0}>{GLOBAL.siteName}</Atom.Heading>
        </Link>

        <Molecule.Menu
          sxMenu={{ ml: 3 }}
          sx={{
            mx: 2
          }}
          items={[
            {
              label: 'Support',
              to: '/support'
            },
            {
              label: 'Feedback',
              to: '/feedback'
            },
          ]}
        />

      </Atom.Flex>

      {/* Right */}

      <Atom.Flex alignCenter>
        <Atom.Span xxs>Built by Rapid at ConsenSys</Atom.Span>
      </Atom.Flex>
    </Atom.Flex>
  )
}

export default Footer