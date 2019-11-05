
/* --- Global --- */
import { Router } from '@reach/router'

import Setup from './Setup'

/* --- Component --- */
export default () =>
<Router primary={false}>
  <Setup path='/install' />
</Router>