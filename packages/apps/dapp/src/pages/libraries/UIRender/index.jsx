
import { Site } from 'templates'
import {
  BoxProviderExample,
  EffectsExample
} from 'content/uistate'

import {
  StorageRender
} from 'content/uirender'

 const showcase = {
  title: '3Box UI System Render',
  tagline: 'Render Data from 3Box Profiles, Spaces and Threads Worry Free.',
}
/* --- Component --- */
const UIRender = () =>
<Site sx={{ bg: 'smoke' }} sxMain={{ alignItems: 'center', justifyContent: 'center' }}>
  <Molecule.Card
    layout='showcase'
    variants={['large', 'centered']}
    sx={{
      p: 3,
      py: 6,
    }}
    sxTitle={{
      fontWeight: 700
    }}
    sxTagline={{
      fontWeight: 300
    }}
    sxMain={{
      maxWidth: 980
    }}
    {...showcase}
    image={null}
  />
  <StorageRender />
</Site>

export default UIRender




