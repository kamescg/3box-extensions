
import { Site } from 'templates'

import {
  BoxProviderExample,
  EffectsExample
} from 'content/uistate'

 const showcase = {
  title: '3Box UI State',
  tagline: 'Lightweight Application State Container',
}

/* --- Component --- */
const UIState = () =>
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
  <BoxProviderExample />
  <EffectsExample />
</Site>

export default UIState




