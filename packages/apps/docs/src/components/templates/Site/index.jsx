/* --- Local --- */
import { RegionTop, RegionFooter } from 'core'

/* --- Components --- */
const Layout = ({ sx, sxMain, children }) => 
<Atom.Flex column flex={1} minHeight='100vh' sx={sx} >
  <RegionTop bg='#1e1e2d' color='white' borderBottom='3px solid #dc448d' p={2} />
  <Atom.Flex column flex={1} width='100%' sx={sxMain}>
    {children}
  </Atom.Flex>
  <RegionFooter  bg='#1e1e2d' color='white' borderTop='3px solid #dc448d' py={5}/>
</Atom.Flex>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
