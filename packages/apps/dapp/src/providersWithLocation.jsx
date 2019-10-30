
/* --- Global --- */
import createHashSource from 'hash-source'
import { createHistory, LocationProvider } from "@reach/router";
import { ThemeProvider as ThemeProviderEmotion } from 'theme-ui'
import { PortalProvider, PortalTree } from "react-portal-system";
import { BoxProvider } from '3box-ui-system'


/* --- Local --- */
import theme from './assets/theme'

/* --- Special Routing History (Useful for GitHub) --- */
let source = createHashSource();
let history = createHistory(source)

export default props => {
  return (
    <LocationProvider history={history}>
      <ThemeProviderEmotion theme={theme}>
        <PortalProvider>
          <BoxProvider>
            <PortalTree />
            {props.children}
          </BoxProvider>
        </PortalProvider>
      </ThemeProviderEmotion>
    </LocationProvider>
  )
}