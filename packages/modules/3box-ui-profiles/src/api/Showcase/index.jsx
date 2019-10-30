/**
 * @function Showcase
 * @description Display Profile Showcase with menu options.
 * @version 1.0.0
 */
/* --- Global --- */
import React from 'react'
import { BoxInject } from '3box-ui-state'
import { ProfileImage, ProfileCover } from '3box-ui-profiles-stateless'

/* --- Local --- */
import Verifications from '../Verifications'
import ProfilePreview from '../ProfilePreview'

/* --- Component --- */
const Showcase = ({ box, ...props }) =>
  <A.Box {...props.styled} >
    <ProfileCover image={box.profile.coverPhoto} styled={props.styledCover} />
    <A.Absolute left={0} right={0} top={0} m={3}>
      <A.Flex alignEnd between flex={1}>
        <A.Panel>
          <A.Span xxs tag='white'>keys</A.Span>
        </A.Panel>
        <A.Span><Verifications /></A.Span>
      </A.Flex>
    </A.Absolute>
    <A.Absolute left={0} right={0} bottom={0} m={3}>
      <A.Flex alignEnd between flex={1}>
        <ProfilePreview />
        <A.Panel>
          <A.Span xs tag='primary'>Menu</A.Span>
        </A.Panel>
      </A.Flex>
    </A.Absolute>
  </A.Box>

Showcase.defaultProps = {
  styled: {
    bg: 'dark',
    minHeight: 200,
    width: 1
  },
  styledAvatar: {
    dimensions: 64,
  },
  styledCover: {
    styledContainer: {
      opacity: .2
    }
  }
}

export default props => <BoxInject><Showcase {...props} /></BoxInject>
