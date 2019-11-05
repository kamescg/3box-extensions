/**
 * @function ProfileCard
 * @description Profile Card
 */
/* --- Global --- */
import React from 'react'
import {BoxInject} from '3box-ui-state'
import { Authenticate } from '3box-ui-system'
import {ProfileImage} from './ProfileImage'
import {ProfileCover} from './ProfileCover'
import {ProfileIdentity} from './ProfileIdentity'
import {ProfileDetailsOccupation} from './ProfileDetailsOccupation'

const styles = {
  container: {
    bg: 'night',
    minHeight: 100,
    p: 6
  },
    cover: {
      bg: 'blue', 
      borderRadius: '10px 10px 0 0',
      opacity: 0.2,
      minHeight: 100
    },
    avatar: {
      mb: 2,
      mt: -60,
      height: 70, 
      width: 70, 
    },
  main: {
    bg: 'neutral',
    borderRadius: '0 0 10px 10px',
    border: '1px solid #e0e0e0',
    borderColor: 'borderShadow',
    boxShadow: 0,
    color: 'text',
    color: 'text',
    p: 3
  }
}

/* --- Component --- */
const ProfileCardShowcaseView = ({ box, children, ...props }) =>
<Atom.Flex center column sx={styles.container}>
  <ProfileCover sx={styles.cover}/>
  <Atom.Flex center column sx={styles.main}>
    <ProfileImage variant='avatar' sx={styles.avatar} />
    <ProfileIdentity />
    <ProfileDetailsOccupation sx={{fontSize: 1, fontWeight: 300}} />
    <Authenticate />
  </Atom.Flex>

</Atom.Flex>



export const ProfileCardShowcase = props =><BoxInject><ProfileCardShowcaseView {...props} /></BoxInject>
