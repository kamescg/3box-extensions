/* --- Global --- */
import { ThemeProvider } from 'theme-ui'
import { TabProvider } from '@horizin/react-hooks-tabs'
import { PortalProvider, PortalTree } from '@horizin/react-hooks-portal'
import { BoxProvider } from '3box-ui-system'

/* --- Local --- */
import theme from './assets/theme'
import './assets/App.css'
import './assets/index.css'

/* --- Constants --- */
const Providers  = ({ element }) =>
<ThemeProvider theme={theme}>
  <BoxProvider>
  <PortalProvider>
      <TabProvider>
        <PortalTree />
          {element}
      </TabProvider>
  </PortalProvider>
  </BoxProvider>
</ThemeProvider>

export default ({ element }) => <Providers element={element}/>