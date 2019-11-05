import React from 'react'
import PropTypes from 'prop-types'
import { StorageRender } from '3box-ui-system-render'

export const ProfileDetailsOccupation = props => (
<StorageRender 
  access='public'
  selector='details.occupation'
  component={ProfileDetailsOccupationView}
  pass={props}
/>
)

const ProfileDetailsOccupationView = ({job, employer, description, sx, sxJob, sxEmployer, sxDescription, ...props}) =>
(
<Atom.Heading sx={{...sx}}>
  <Atom.Span className='job' sx={{...sxJob}} >{job}</Atom.Span>
  <Atom.Span className='employer' sx={{mx: 1, ...sxEmployer}}>{employer}</Atom.Span>
  <Atom.Span className='description' sx={{...sxDescription}}>{description}</Atom.Span>
</Atom.Heading>
)

ProfileDetailsOccupationView.defaultProps = {
}
ProfileDetailsOccupationView.propTypes = {
  job: PropTypes.string,
  employer: PropTypes.string,
  description: PropTypes.string,
  sx: PropTypes.object,
  sxjob: PropTypes.object,
  sxEmployer: PropTypes.object,
  sxDescription: PropTypes.object,
}