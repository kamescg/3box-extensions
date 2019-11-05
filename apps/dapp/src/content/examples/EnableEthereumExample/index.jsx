import {
  EnableEthereum,
} from '3box-ui-system'

import { CodeCard } from '@horizin/design-system-molecules'

const EnableEthereumExample = props =>
<CodeCard
  title='Enable Ethereum Provider'
  summary='Request permissions from the environment wallet.'
  example={<EnableEthereum />}
  code={CodeExampleString}
/>

const CodeExampleString = (
`import React from 'react'
import { EnableEtheruem } from '3box-ui-system'
export default props =>(
  <EnableEtheruem
    componentIsDisconnected={CustomComponent}
    componentIsLoading={CustomComponent}
    componentIsConnected={CustomComponent}
  />
)
`
)

export default EnableEthereumExample