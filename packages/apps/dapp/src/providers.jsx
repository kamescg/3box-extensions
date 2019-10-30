
/* --- Global --- */
import { ThemeProvider as ThemeProviderEmotion } from 'theme-ui'
import { PortalProvider, PortalTree } from "react-portal-system";
import { BoxProvider } from '3box-ui-system'
import { EthersProvider } from 'ethers-react-system'

/* --- Local --- */
import theme from './assets/theme'

export default props => {
	return (
		<ThemeProviderEmotion theme={theme}>
			<PortalProvider>
				<EthersProvider>
					<BoxProvider>
						<PortalTree />
						{props.children}
					</BoxProvider>
				</EthersProvider>
			</PortalProvider>
		</ThemeProviderEmotion>
	)
}