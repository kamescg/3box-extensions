/**
 * @function ProfileDetails
 * @description Display Profile Details
 * @version 1.0.0
 */
/* --- Global --- */
import idx from 'idx'
import React from 'react'
import { BoxInject } from '3box-ui-state'
import { Component, validate } from '@horizin/ui-compose'
/* --- Local --- */

/* --- Component --- */
const ProfileDetails = ({ box, ...props }) =>
  <A.Flex column {...props.styled} >
    {idx(box, _ => _.profile.id.name) &&
      <A.Flex alignCenter>
        <A.Heading lg heavy {...props.styledName.first}>
          {validate.isStringRender(box.profile.id.name.first)}
        </A.Heading>
        <A.Heading md thin ml={2} {...props.styledName.last}>
          {validate.isStringRender(box.profile.id.name.middle)} {validate.isStringRender(box.profile.id.name.last)}
        </A.Heading>
      </A.Flex>
    }

    {idx(box, _ => _.profile.id.occupation.job) &&
      <A.Span fontSize={[2]} {...props.styledJob}>
        <A.Span {...props.styledJob}>
          {validate.isStringRender(box.profile.id.occupation.job)}
        </A.Span>
        {idx(box, _ => _.profile.id.occupation.employer) &&
          <A.Span {...props.styledEmployer}>at {validate.isStringRender(box.profile.id.occupation.employer)}
          </A.Span>}
      </A.Span>}
  </A.Flex>

ProfileDetails.defaultProps = {
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

export default props => <BoxInject><ProfileDetails {...props} /></BoxInject>
