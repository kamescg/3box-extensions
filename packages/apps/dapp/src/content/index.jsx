
/* --- Global --- */
import { Router } from '@reach/router'

import Setup from './Setup'
import StateSystem from './StateSystem'
import DesignSystem from './DesignSystem'
import Mobile from './Mobile'

/* --- Component --- */
export default () =>
<Router primary={false}>
  <Setup path='/setup' />
  <StateSystem path='/state-system' />
  <DesignSystem path='/design-system' />
  <Mobile path='/mobile' />
</Router>