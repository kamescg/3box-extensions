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

        <A.Flex bg='blue' minHeight={140} flex={1} width='100%'>
          {
            !isCover
              ? <ProfileCover image={profile.coverPhoto} styled={props.styledCover} />
              : <A.BackgroundImage ratio={.3} src={'https://wallpaperaccess.com/full/1267681.jpg'} styled={props.styledCover} />
          }
        </A.Flex>

        <A.Flex center column {...props.styledMain}>

          <A.Box
            style={{
              marginTop: isCover ? -80 : -60
            }}
          >
            <ProfileAvatar image={profile.image} styled={props.styledAvatar} dimensions={128} />
          </A.Box>

          {idx(profile, _ => _.id.name) &&
            <A.Flex alignCenter>
              <A.Heading lg heavy {...props.styledName.first}>
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

          {idx(profile, _ => _.id.occupation.job) &&
            <A.Span fontSize={[2]} {...props.styledJob}>
              <A.Span {...props.styledJob}>
                {validate.isStringRender(profile.id.occupation.job)}
              </A.Span>
              {props.displayEmployer && idx(profile, _ => _.id.occupation.employer) &&
                <A.Span {...props.styledEmployer}>at {validate.isStringRender(profile.id.occupation.employer)}
                </A.Span>}
            </A.Span>}
        </A.Flex>

        {
          isFooterActive &&
          <A.Flex {...props.styledFooter}>

          </A.Flex>
        }

      </A.Box>
  )
}

ProfileCard.defaultProps = {
  displayNameLast: false,
  displayEmployer: false,
  styled: {
    card: true,
    p: 0
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
