
/* --- Global --- */
import { Router } from '@reach/router'

import ProfileOverview from './views/ProfileOverview'
import ProfileSettings from './views/ProfileSettings'
import ProfileSpaces from './views/ProfileSpaces'
import ProfileThreads from './views/ProfileThreads'
import ProfileFiles from './views/ProfileFiles'

/* --- Component --- */
export default () =>
<Router width='100%'>
  <ProfileSettings path='/settings/*' />
  <ProfileSpaces path='/spaces/*' />
  <ProfileThreads path='/threads/*' />
  <ProfileFiles path='/files/*' />
  <ProfileOverview path='/*' />
</Router>