/**
 * @function ProfilePreview
 * @description Display Profile ProfilePreview with menu options.
 * @version 1.0.0
 */
/* --- Global --- */
import React from 'react'
import { BoxInject } from '3box-ui-state'
import { ProfileImage, ProfileCover } from '3box-ui-profiles-stateless'
import ProfileDetails from '../ProfileDetails'

/* --- Local --- */

/* --- Component --- */
const ProfilePreview = ({ box, ...props }) =>
  <A.Flex alignCenter {...props.styled} >
    <A.Panel content={<CMS.ProfilePanel />} >
      <ProfileImage image={box.profile.image} {...props.styledAvatar} />
    </A.Panel>
    <ProfileDetails styled={{ ml: 2, color: 'white' }} />
  </A.Flex>

ProfilePreview.defaultProps = {
  styled: {

  },
  styledAvatar: {
    dimensions: 64,
  },
}

export default props => <BoxInject><ProfilePreview {...props} /></BoxInject>
