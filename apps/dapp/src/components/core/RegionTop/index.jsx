/* --- Global --- */
import { Link } from '@reach/router'
import { ColorMode } from 'core'

export default props =>
<Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
  {/* Left */}
  <Atom.Flex alignCenter>
    <Link to='/'>
      <Atom.Heading sm heavy mb={0}>{GLOBAL.siteName}</Atom.Heading>
    </Link>

    {/* Menu */}
    <Atom.Flex alignCenter ml={4}>
      <Molecule.Menu
        styled={{
          m: 2
        }}
        items={[
          {
            label: 'Install',
            to: '/install'
          },
        ]}
      />
    </Atom.Flex>
    {/* Right */}
  </Atom.Flex>
  <Atom.Flex alignCenter>
    <ColorMode />
  </Atom.Flex>
</Atom.Flex>