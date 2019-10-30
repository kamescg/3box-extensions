
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
import Providers from './providers'

import {
	Account,
	Contribute,
	Feedback,
	Home,
	Started,
	Support,
	Profile
} from './pages'

import Content from './content'
/* --- Component --- */
export default () =>
	<Providers>
		<Router width='100%'>
			<Home path='/' />
			<Account path='/account/*' />
			<Profile path='/profile/:address' />


			{/* Secondary Links */}
			<Contribute path='/contribute' />
			<Feedback path='/feedback' />
			<Support path='/support' />
			<Started path='/started' />

			<Content path='/*' /> 

		</Router>
	</Providers>