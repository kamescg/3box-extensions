/* --- Global --- */
import { ThemeProvider } from 'styled-components'
import { TabProvider } from '@horizin/react-hooks-tabs'
import { PortalProvider, PortalTree } from '@horizin/react-hooks-portal'
import {
	createHistory,
	LocationProvider,
} from "@reach/router";
import createHashSource from 'hash-source'

/* --- Local --- */
import theme from './assets/theme'
import './assets/App.css'
import './assets/index.css'

/* --- Constants --- */
class Providers extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
    }
  }
  
  // Mounted
  componentDidMount()
  {
    let source = createHashSource();
    let history = createHistory(source)
    this.setState({
      source,
      history,
      isLoading: false,
    })
  }
  // Updated
  componentDidUpdate()
  {

  }

  // Error Catched
  componentDidCatch() {
    
  }


  render(){
    const { isLoading } = this.state
    const { element } = this.props
    return(
      isLoading ? null :
      <LocationProvider history={this.state.history}>
      <ThemeProvider theme={theme}>
        <PortalProvider>
            <TabProvider>
              <PortalTree />
                {element}
            </TabProvider>
        </PortalProvider>
      </ThemeProvider>
      </LocationProvider>
    )
  }
}

export default ({ element }) => <Providers element={element}/>