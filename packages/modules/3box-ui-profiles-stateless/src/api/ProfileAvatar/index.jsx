/* --- Global --- */
import React from 'react'
import { BackgroundImage, Flex } from '@horizin/design-system-atoms'
import { GenerateImage } from '../utilities'

/* --- Components --- */
const ProfileAvatar = props =>
  <Flex
    center column boxShadow={0} p={2}
    maxWidth={164} maxWidth={164}
    overflow='hidden'
    height={props.dimensions}
    width={props.dimensions}
    {...props}
  >
    {
      props.image
        ? <BackgroundImage
          ratio={.5}
          src={GenerateImage(props.image)}
        />
        : <BackgroundImage
          ratio={.5}
          circle
          src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' />
    }
  </Flex>

ProfileAvatar.defaultProps = {
  dimensions: 36
}

ProfileAvatar.propTypes = {
  dimensions: PropTypes.integer
}

export default ProfileAvatar