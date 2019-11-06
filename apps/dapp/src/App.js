
/**
 * @function Application
 * @version 0.0.1
 * @description Application
 */

/* --- Local --- */
import './assets/App.css';
import './assets/index.css';
import { Router } from '@reach/router'
import Providers from './providersWithLocation'

import {
	Home,
	Profile,
} from './pages'
import Content from './content'

/* --- Component --- */
export default () =>
<Providers>
	<Router width='100%'>
		<Home path='/' />
		<Profile path='/profile' />
		<Content path='/*' /> 
	</Router>
</Providers>