/* --- Global Dependencies --- */
import React from 'react'
import { Span, Flex, Image } from '@horizin/design-system-atoms'
import { BoxInject } from '3box-ui-state'
import { GenerateImagefromHash } from '../utilities'
import BoxLoginCard from './BoxLoginCard'

/* --- React Component --- */
const BoxLoginAvatar = ({ variant, children, styled,...props  }) =>  
<A.Box>
    <BoxLoginCard />
</A.Box>

BoxLoginAvatar.defaultProps = {
  image: "QmYGh4a6cjH7a3mw9xSYezp2WenGb3d7wj7Wwo9TV44knE",
  name: 'Kames Geraghty',
  role: 'Fullstack Javascript Developer',
  employer: 'ConsenSys',
  panelContent: <A.Card content='winning' />
}

export default props =>
<BoxInject><BoxLoginAvatar {...props} /></BoxInject>