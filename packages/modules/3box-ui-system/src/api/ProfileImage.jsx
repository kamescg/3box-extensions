/* --- Global --- */
import React from 'react'
import { GenerateImage } from '../utilities'

export default props =>
<DID.Context>{box => (
    <A.Flex
      circle center column boxShadow={0} p={2}
      sx={{
        border: "2px solid #FFF",
        borderRadius: 9999,
        overflow: 'hidden',
        ...props.sx
      }}
      width={36} height={36} maxWidth={48} maxWidth={48}
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
)}</DID.Context>