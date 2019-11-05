import { SpaceOpen } from '3box-ui-system'
import { CodeCard } from '@horizin/design-system-molecules'

export default () =>
<CodeCard
  title='Space Open'
  summary='Enforce a space is opened before displaying children components.'
  example={<SpaceOpen space='web3' />}
  code={CodeExampleString}
/>

const CodeExampleString = (
  `
  import React from 'react'
  import { SpaceOpen } from '3box-ui-system'
  export default props => <SpaceOpen space='3box' />
  `
)