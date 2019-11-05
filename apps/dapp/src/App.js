
/**
 * @function Application
 * @version 1.0.0
 * @description Application
 */

/* --- Local --- */
import './assets/App.css';
import './assets/index.css';
import { Router } from '@reach/router'
/*
* Providers
* Initialize application state providers.
* @todo Create provider plugin system.
*/
import Providers from './providersWithLocation'

import {
	Home,
} from './pages'
import Content from './content'

/* --- Component --- */
export default () =>
	<Providers>
		<Router width='100%'>
			<Home path='/' />
			<Content path='/*' /> 
		</Router>
	</Providers>