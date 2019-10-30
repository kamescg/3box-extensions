
/* --- Global Dependencies --- */
import idx from 'idx'
import React, { useEffect, useState } from "react";
import { BoxInject } from '3box-ui-state'
import { Absolute, Box, BackgroundImage, Flex, Image, Heading, Span, Paragraph, Link } from '@horizin/design-system-atoms'
import { GenerateImage } from './utilities'

/* ------- Component ------- */
const BoxProfileRetrieve = ({ box, address, small, styled, ...props }) => {
  const [ profile, setProfile ] = useState()
  /**
   * @function ProfileRetrieve
   * @description Send message signing request to current Web3 provider.
   */
  useEffect( () => {
    if(address && !profile) {
      box.getProfile(address)
    } else if(idx(box, _=>_.profiles[address])) {
      // setProfile(idx(box, _=>_.profiles[address]))
    }
  }, [ address, profile])
  
  useEffect( () => {
    if(!profile) {
      setProfile(idx(box, _=>_.profiles[address]))
    } 
  }, [ profile, idx(box, _=>_.profiles[address])])


  return (
    <ProfileCard small={small} profile={profile} address={address} />
)}

const ProfileCard = ({ profile, small, ...props}) => {
  return (
    profile
    ?<>
      <Flex alignCenter>
        <Flex
          circle center column boxShadow={0} p={2}
          border="2px solid #FFF"
          overflow='hidden'
          width={48} height={48} maxWidth={48} maxWidth={48}
          >
            {
              profile.image
              ? <BackgroundImage
                ratio={.5}
                src={GenerateImage(profile.image)} />
              : <BackgroundImage
                ratio={.5}
                src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' /> 
            }
        </Flex>

        <Box ml={10}>
          <Link to={`/profile/${props.address}`}>
            <Heading md heavy noMargin>
              {idx(profile, _=>_.name)}
            </Heading>
          </Link>
          <Heading sm thin noMargin level={4}>{idx(profile, _=>_.job)}</Heading>
        </Box>
      </Flex>
    </>
    : <Flex alignCenter>
        <Span><Image card circle src='https://static.thenounproject.com/png/2348501-200.png' border='none' bg='white' width={48}/></Span>
        <Box ml={10}>
          <Box borderRadius={40} bg='gray' p={2} width={160} />
          <Box borderRadius={40} bg='gray' p={1} width={80} mt={10} />
        </Box>
      </Flex>
  )
}

export default props =>
<BoxInject>
  <BoxProfileRetrieve {...props} />
</BoxInject>