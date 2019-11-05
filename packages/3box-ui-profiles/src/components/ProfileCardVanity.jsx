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
  header: {
    bg: 'night', 
    borderRadius: '10px 10px 0 0',
    minHeight: 100
  },
    cover: {
      bg: 'blue', 
      borderRadius: '10px 10px 0 0',
      minHeight: 100
    },
    avatar: {
      height: 80, 
      mb: 2,
      mt: -60,
      width: 80, 
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
const ProfileCardVanityView = ({ box, children, ...props }) =>
<Atom.Box>

  <Atom.Box sx={styles.header}>
    <ProfileCover sx={styles.cover}/>
  </Atom.Box>

  <Atom.Flex center column sx={styles.main}>
    <ProfileImage variant='avatar' sx={styles.avatar} />
    <ProfileIdentity />
    <ProfileDetailsOccupation sx={{fontSize: 1, fontWeight: 300}} />
    <Authenticate />
  </Atom.Flex>
</Atom.Box>


export const ProfileCardVanity = props =><BoxInject><ProfileCardVanityView {...props} /></BoxInject>
