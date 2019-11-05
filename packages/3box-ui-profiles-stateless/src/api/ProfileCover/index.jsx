/* --- Global --- */
import React from 'react'
import { BackgroundImage } from '@horizin/design-system-atoms'
import { GenerateImage } from '../utilities'

/* --- Components --- */
export default props =>
  props.image
    ? <BackgroundImage
      ratio={.5}
      src={GenerateImage(props.image)}
      {...props}
    />
    : null