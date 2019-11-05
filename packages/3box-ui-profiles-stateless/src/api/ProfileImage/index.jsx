/* --- Global --- */
import React from 'react'
import { BackgroundImage, Flex } from '@horizin/design-system-atoms'
import { GenerateImage } from '../utilities'

/* --- Components --- */
export default props =>
  <Flex
    circle center column boxShadow={0} p={2}
    variant='avatar'
    border="2px solid #FFF"
    overflow='hidden'
    maxWidth={124} maxWidth={124}
    height={props.dimensions}
    width={props.dimensions}
    {...props}
  >
    {
      props.image
        ? <BackgroundImage
          ratio={.5}
          circle
          src={GenerateImage(props.image)} />
        : <BackgroundImage
          ratio={.5}
          circle
          src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' />
    }
  </Flex>