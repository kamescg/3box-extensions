
/* --- Global --- */
import createHashSource from 'hash-source'
import { createHistory, LocationProvider } from "@reach/router";
import { ThemeProvider as ThemeProviderEmotion } from 'theme-ui'
import { Provider as BoxProvider } from '3box-ui-system'
import { PortalProvider, PortalTree } from "react-portal-system";

/* --- Local --- */
import theme from './assets/theme'

/* --- Special Routing History (Useful for GitHub) --- */
let source = createHashSource();
let history = createHistory(source)

export default props => {
  return (
    <LocationProvider history={history}>
      <ThemeProviderEmotion theme={themeEmotion}>
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