import React from 'react'
import PropTypes from 'prop-types'
import { StorageRender } from '3box-ui-system-render'

export const ProfileDetailsSocial = props => (
<StorageRender 
  access='public'
  selector='details.social'
  component={ProfileDetailsSocialView}
  pass={props}
/>
)

const ProfileDetailsSocialView = ({twitter, github, linkedin, sx, sxTwitter, sxGithub, sxLinkedin, ...props}) =>
(
<Atom.Heading sx={{...sx}}>
  <Atom.Span className='twitter' sx={{...sxTwitter}} >{twitter}</Atom.Span>
  <Atom.Span className='github' sx={{mx: 1, ...sxGithub}}>{github}</Atom.Span>
  <Atom.Span className='linkedin' sx={{...sxLinkedin}}>{linkedin}</Atom.Span>
</Atom.Heading>
)

ProfileDetailsSocialView.defaultProps = {
}
ProfileDetailsSocialView.propTypes = {
  twitter: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string,
  sx: PropTypes.object,
  sxTwitter: PropTypes.object,
  sxGithub: PropTypes.object,
  sxLinkedin: PropTypes.object,
}