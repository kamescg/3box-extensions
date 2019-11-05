import { CodeCard } from '@horizin/design-system-molecules'

const InitProviderExample = props =>
<CodeCard
  title='Initialize The Provider'
  summary='Add a 3Box provider to an application component hierarchy.'
  code={CodeExampleString}
/>

const CodeExampleString = (
`import React from 'react'
import { BoxProvider } from '3box-ui-system'
export default props =>
<BoxProvider>
  {props.children}
</BoxProvider>`
)

export default InitProviderExample