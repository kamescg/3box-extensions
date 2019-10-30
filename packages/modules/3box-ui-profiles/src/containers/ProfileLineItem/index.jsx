/**
 * @function ProfileLineItem
 * @description Display Profile Details in Line Item
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
} from '3box-ui-profiles-stateless'

/* --- Local --- */

import { useProfileRetrieveEffect } from '../effects'

/* --- Component --- */
const ProfileLineItem = ({ box, ...props }) => {
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
      <A.Flex alignCenter between {...props.styled}>

        {/* Left */}
        <A.Flex alignCenter>
          <ProfileAvatar image={profile.image} styled={props.styledAvatar} dimensions={32} borderRadius={9999} />

          {idx(profile, _ => _.id.name) &&
            <A.Flex alignCenter>
              <A.Heading {...props.styledName.first}>
                {validate.isStringRender(profile.id.name.first)}
              </A.Heading>
              {
                props.displayNameLast &&
                <A.Heading md thin ml={2} {...props.styledName.last}>
                  {validate.isStringRender(profile.id.name.middle)} {validate.isStringRender(profile.id.name.last)}
                </A.Heading>
              }
            </A.Flex>
          }
        </A.Flex>
        {/* Center */}

        {/* Right */}
        <A.Box>
          <A.Link to={`/profile/${profile.address}`}>
            <A.Span xxs tag='blue'>Profile</A.Span>
          </A.Link>
        </A.Box>
      </A.Flex>
  )
}

ProfileLineItem.defaultProps = {
  displayNameLast: false,
  displayEmployer: false,
  styled: {
    card: true,
    my: 1,
    flex: 1
  },
  styledCover: {
    opacity: .3
  },
  styledMain: {
    p: 3
  },
  styledFooter: {
    gradient: 'gray',
    p: 2
  },


  styledName: {
    first: {
      fontWeight: 500,
      fontSize: 3,
      mb: 0,
      ml: 3,
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

export default props => <BoxInject><ProfileLineItem {...props} /></BoxInject>
