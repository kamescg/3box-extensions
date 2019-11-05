
/**
 * @name RegionTop
 * @description Default Top RegionTop region component.
 */
/* --- Global --- */
import { Link } from '@reach/router'
import { Login } from '3box-ui-system'

const RegionTop = props => {
  return (
    <Atom.Flex alignCenter between sx={{ variant: 'layout.header' }}>
      {/* Left */}
      <Atom.Flex alignCenter>
        <Link to='/'>
          <Atom.Heading sm heavy mb={0}>{GLOBAL.siteName}</Atom.Heading>
          <Atom.Heading xxs normal>A Rapid Experiment</Atom.Heading>
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
                label: 'UI State',
                to: '/3box-ui-state'
              },
              {
                label: 'UI System',
                to: '/3box-ui-system'
              },
              {
                label: 'UI Render',
                to: '/3box-ui-system-render'
              }
            ]}
          />
        </Atom.Flex>
        {/* Right */}
      </Atom.Flex>
      <Atom.Flex alignCenter>
        <Login />
      </Atom.Flex>
    </Atom.Flex>
  )
}


export default RegionTop