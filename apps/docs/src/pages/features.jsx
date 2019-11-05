import React from 'react';
import { PropTypes } from 'prop-types'

const Page = ({ styled, ...props }) => {

  return (

    <A.Box>
      <A.Box fullWidth gradient='blueDark' py={5}>
        <A.Heading xxl>Title to Engage</A.Heading>
        <A.Heading xxl>A Tagline to Inspire</A.Heading>
      </A.Box>
    </A.Box>
  )
}


Page.defaultProps = {
  styled: {}
}

Page.propTypes = {
  styled: PropTypes.object
}

export default Page