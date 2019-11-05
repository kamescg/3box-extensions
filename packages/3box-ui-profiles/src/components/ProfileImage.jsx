/* --- Global --- */
import React from 'react'
import { GenerateImage } from '../utilities'

export const ProfileImage = ({sx, ...props}) =>
<DID.Context>{
  box => (
    <A.Flex
      circle center column
      sx={{
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 9999,
        boxShadow: 0,
        display: 'inline-flex',
        height: 48,
        width: 48,
        overflow: 'hidden',
        ...sx
      }}
      {...props}
      >
        {
          box['@'][box.address] && box['@'][box.address].profile && box['@'][box.address].profile.image
          ? <A.BackgroundImage
            ratio={.5}
            circle
            src={GenerateImage(box['@'][box.address].profile.image)} />
          : <A.BackgroundImage
            ratio={.5}
            circle
            src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' /> 
        }
    </A.Flex>
)
}</DID.Context>