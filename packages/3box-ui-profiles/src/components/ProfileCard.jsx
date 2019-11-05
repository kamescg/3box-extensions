/**
 * @function ProfileCard
 * @description Profile Card
 */
/* --- Global --- */
import React from 'react'
import {BoxInject} from '3box-ui-state'
import {ProfileImage} from './ProfileImage'
import {ProfileIdentity} from './ProfileIdentity'
import {ProfileDetailsOccupation} from './ProfileDetailsOccupation'

/* --- Component --- */
const ProfileCardView = ({ box, children, ...props }) =>
<>
  <Atom.Flex center column card sx={{textAlign: 'center'}}>
    <ProfileImage variant='avatar' sx={{width: 80, height: 80, my: 2}} />
    <ProfileIdentity />
    <ProfileDetailsOccupation sx={{fontSize: 1, fontWeight: 300}} />
    {
      box.isEnableSuccess &&
      <Atom.Span tag sm>View Full Profile</Atom.Span>
    }
  </Atom.Flex>
</>

export const ProfileCard = props =><BoxInject><ProfileCardView {...props} /></BoxInject>
