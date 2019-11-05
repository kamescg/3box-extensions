/* --- Global Dependencies --- */
import React from 'react'
import { Absolute, Box, Span, Loading, Image, Panel } from '@horizin/design-system-atoms'
import { BoxInject } from '3box-ui-state'
import { GenerateImage } from '../utilities'
import BoxLoginIcons from './BoxLoginIcons'
import ProfileImage from './ProfileImage'
/* --- React Component --- */
const BoxLoginAvatar = ({ box, variant, children, styled,...props  }) => 
<A.Flex center column {...props}>
  <Absolute top={0} ><Loading type='ripple' /></Absolute>
  {!box.isLoggedIn
  ? <>
    {
      box.address
      ? <ProfileImage onClick={box.open} opacity={.75} opacity={box.isLoggingIn ? .75 : .5} />
      : <ProfileImage opacity={1} pointer
          onClick={box.enable}/>
    }
    {
      box.address
      ? box.isLoggingIn
        ? <Absolute><Loading type='ripple' /></Absolute>
        : <Absolute bottom={0} mb='-10px' left right ><Span pointer xxs tag='white' onClick={box.open}>login</Span></Absolute>
      : <Absolute bottom={0} mb='-15px' left right ><Span pointer xxs tag='green' onClick={box.enable}>enable</Span></Absolute>
    }
    </>
  : <A.Panel content={<CMS.ProfilePanel />} >
      <A.Flex center column>
        <ProfileImage opacity={1}/>
        <Absolute bottom={0} mb='-13px' left right mx='auto' ><Span pointer xxs tag='blue' onClick={box.enable}>menu</Span></Absolute>
      </A.Flex>
    </A.Panel>}
</A.Flex>
    
BoxLoginAvatar.defaultProps = {
  image: "QmYGh4a6cjH7a3mw9xSYezp2WenGb3d7wj7Wwo9TV44knE",
  name: 'Kames Geraghty',
  role: 'Fullstack Javascript Developer',
  employer: 'ConsenSys',
  panelContent: <A.Card content='winning' />
}

export default props =>
<BoxInject><BoxLoginAvatar {...props} /></BoxInject>
