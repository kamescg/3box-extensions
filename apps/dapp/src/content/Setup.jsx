
import { Site } from 'templates'
import {
AddLoginExample,
EnableEthereumExample,
InitProviderExample,
SpaceOpenExample,
ThreadJoinExample,
} from 'content/examples'

import { CodeHighlight, Markdown } from '@horizin/design-system-molecules'

/* --- Component --- */
export default () =>
<Site sx={{ bg: 'paper', color: 'text', minHeight: '100vh' }} sxMain={{ alignItems: 'center', justifyContent: 'center' }}>
  <Atom.Container sx={{maxWidth: [1,1,780, 780]}}>
    <Atom.Box sx={{py: 3, textAlign: 'center'}}>
      <Atom.Heading giga>3Box Extensions Setup</Atom.Heading>
      <Atom.Span tag sx={{p:3}}>Under Construction</Atom.Span>
      <CodeHighlight>
        git clone git@github.com:KamesCG/3box-extensions.git
      </CodeHighlight>
    </Atom.Box>
    <Atom.Card neutral>
      <Markdown>
{`
## Getting Started

\`git clone git:github.com/KamesCG/3box-extensions\`

###Terminal 1
\`yarn\`
\`yarn watch\`

### Terminal 2 (Demo)
\`cd apps/dapp ; yarn start\`

The best place for developers to get understand what's happening is to start at the root module, which is packages/3box-ui-state.
`}
      </Markdown>
    </Atom.Card>
    </Atom.Container>
</Site>



