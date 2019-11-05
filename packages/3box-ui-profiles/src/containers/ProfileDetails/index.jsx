/**
 * @function ProfileCard
 * @description Display Profile Details
 * @version 1.0.0
 */
/* --- Global --- */
import idx from 'idx'
import React, { useState, useEffect } from 'react'
import { BoxInject } from '3box-ui-state'
import { validate } from '@horizin/ui-compose'
import {
  ProfileAvatar,
  ProfileCover,
  ProfileDetails,
} from '3box-ui-profiles-stateless'

/* --- Local --- */
import { isAddress } from '../helpers'
import { useProfileRetrieveEffect } from '../effects'

/* --- Component --- */
const ProfileCard = ({ box, ...props }) => {
  /* --- Component State --- */
  const [isFooterActive, setFooterActive] = useState()

  /* --- Profile State --- */
  const [profile, setProfile] = useState()
  const [isAvatar, setAvatar] = useState()
  const [isCover, setCover] = useState()
  const [isName, setName] = useState()
  const [isJob, setJob] = useState()

  const request = useProfileRetrieveEffect(box, props)

  useEffect(() => {
    if (request.isReady)
      setProfile(request.profile)
    if (request.profile.image) setAvatar(true)
    if (request.profile.coverPhoto) setCover(true)
    if (request.profile.id && request.profile.id.name) setName(true)
    if (request.profile.id && request.profile.id.occupation) setJob(true)
  }, [request.isReady])

  return (
    !profile ? null :
      <A.Box {...props.styled}>
        {
          profile.biography &&
          <A.Markdown>
            {profile.biography}
          </A.Markdown>
        }
      </A.Box>
  )
}

ProfileCard.defaultProps = {
  displayNameLast: false,
  displayEmployer: false,
  styled: {
    p: 0
  },
  styledCover: {
    opacity: .3
  },
  styledMain: {
    p: 3
  },
  styledFooter: {

    p: 2
  },


  styledName: {
    first: {
      fontWeight: 700,
      fontSize: 3,
      mb: 0,
      noMargin: true
    },
    last: {
      fontWeight: 500,
      fontSize: 2,
      mb: 0
    }
  },
  styledJob: {
    fontWeight: 700,
    fontSize: 2,
    mt: 1
  },
  styledEmployer: {
    fontWeight: 300,
    fontSize: 2,
    ml: 2
  }
}

export default props => <BoxInject><ProfileCard {...props} /></BoxInject>
