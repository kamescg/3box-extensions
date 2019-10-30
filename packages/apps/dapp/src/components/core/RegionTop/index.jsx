
/**
 * @name RegionTop
 * @description Default Top RegionTop region component.
 */
/* --- Global --- */
import { Link } from '@reach/router'
import { Login } from '3box-ui-system'

const RegionTop = props => {
  return (
    <Atom.Flex alignCenter between sx={{variant: 'layout.header'}}>
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
                label: 'Setup',
                to: '/setup'
              },
              {
                label: 'Plugins',
                to: '/plugins'
              },
              {
                label: 'Docs',
                to: '/docs'
              },
              {
                label: 'Guides',
                to: '/guides'
              },
            ]}
          />
        </Atom.Flex>
        {/* Right */}
      </Atom.Flex>
      <Atom.Flex alignCenter>
        <Molecule.Menu
          styled={{
            m: 2
          }}
          items={[
            {
              label: 'Account',
              to: '/account'
            },
            {
              label: 'Profile',
              to: '/profile'
            },
          ]}
        />
        <Login />
      </Atom.Flex>
    </Atom.Flex>
  )
}


export default RegionTop