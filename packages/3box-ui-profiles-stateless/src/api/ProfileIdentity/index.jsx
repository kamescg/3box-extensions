/**
 * @function ProfileIdentity
 * @description Display Profile Details
 * @version 1.0.0
 */
/* --- Global --- */
import idx from 'idx'
import React, { useState, useEffect } from 'react'
import { BoxInject } from '3box-ui-state'
import { validate } from '@horizin/ui-compose'

/* --- Local --- */

/* --- Component --- */
const ProfileIdentity = ({ box, ...props }) => {
  const [profile, setProfile] = useState()

  console.log(props, 'porifle identity component')
  useEffect(() => {
    setProfile(props.profile)
  }, [props.profile])

  return (

    <A.Flex column {...props.styled} >
      {idx(profile, _ => _.id.name) &&
        <A.Flex alignCenter>
          <A.Heading lg heavy {...props.styledName.first}>
            {validate.isStringRender(profile.id.name.first)}
            {profile.name}
          </A.Heading>
          <A.Heading md thin ml={2} {...props.styledName.last}>
            {validate.isStringRender(profile.id.name.middle)} {validate.isStringRender(profile.id.name.last)}
          </A.Heading>
        </A.Flex>
      }

      {idx(profile, _ => _.id.occupation.job) &&
        <A.Span fontSize={[2]} {...props.styledJob}>
          <A.Span {...props.styledJob}>
            {validate.isStringRender(profile.id.occupation.job)}
          </A.Span>
          {idx(profile, _ => _.id.occupation.employer) &&
            <A.Span {...props.styledEmployer}>at {validate.isStringRender(profile.id.occupation.employer)}
            </A.Span>}
        </A.Span>}
    </A.Flex>
  )
}

ProfileIdentity.defaultProps = {
  styled: {},
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

export default props => <BoxInject><ProfileIdentity {...props} /></BoxInject>
