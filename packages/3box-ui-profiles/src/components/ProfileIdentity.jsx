import React from 'react'
import PropTypes from 'prop-types'
import { StorageRender } from '3box-ui-system-render'

export const ProfileIdentity = props => (
<StorageRender 
  access='public'
  selector='id'
  component={ProfileIdentityView}
  pass={props}
/>
)

const ProfileIdentityView = ({first, middle, last, sx, sxFirst, sxMiddle, sxLast, ...props}) =>
(
<Atom.Heading sx={{sx}} {...props}>
  {console.log(props, 'ProfileIdentityView')}
  <Atom.Span className='first' sx={{...sxFirst}} >{first}</Atom.Span>
  <Atom.Span className='middle' sx={{mx: 1, ...sxMiddle}}>{middle}</Atom.Span>
  <Atom.Span className='last' sx={{...sxLast}}>{last}</Atom.Span>
</Atom.Heading>
)

ProfileIdentityView.defaultProps = {
}
ProfileIdentityView.propTypes = {
  first: PropTypes.string,
  middle: PropTypes.string,
  last: PropTypes.string,
  sx: PropTypes.object,
  sxFirst: PropTypes.object,
  sxMiddle: PropTypes.object,
  sxLast: PropTypes.object,
}