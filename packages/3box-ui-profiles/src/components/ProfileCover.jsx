/* --- Global --- */
import React from 'react'
import { GenerateImage } from '../utilities'

export const ProfileCover = ({sx, ...props}) =>
<DID.Context>{
  box => (
    box['@'][box.address] && box['@'][box.address].profile && box['@'][box.address].profile.coverPhoto
    ? <A.BackgroundImage
        src={GenerateImage(box['@'][box.address].profile.coverPhoto)} 
        sx={sx}
        {...props}
      />
    : null
)
}</DID.Context>