/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react'
import {
  BackgroundGradient, BackgroundImage,
  Box, Button, Heading, Span, Flex, Image, Paragraph, Absolute
} from '@horizin/design-system-atoms'
import { BoxInject } from '3box-ui-state'

import BoxLoginButton from './BoxLoginButton'
import { GenerateImage } from './utilities'
/* --- React Component --- */
const BoxLoginCard = ({
  box,
  isFooterActive,
  variant, children, styled, styledInner,
  ...props
}) => {

  const [profile, setProfile] = useState()
  const [isImage, setIsImage] = useState()
  const [isCover, setIsCover] = useState()
  const [isName, setIsName] = useState()
  const [isJob, setIsJob] = useState()

  useEffect(() => {
    if (box.profile) {
      setProfile(box.profile)
    }
  }, [box.profile])

  useEffect(() => {
    if (profile) {
      if (profile.image) setIsImage(true)
      if (profile.coverPhoto) setIsCover(true)
      if (profile.name) setIsName(true)
      if (profile.job) setIsJob(true)
    }
  }, [profile])

  return (
    !box.address
      ? <BoxLoginButton />
      : <>
        <Box boxShadow={5} p={0} width='100%' {...styled} {...props}>
          <Box column height='100%' width='100%' {...styledInner}>

            <Flex flex={1} p={2} minHeight={320} width='100%'>
              <Absolute layout='topRight' zIndex={100}>
                <Flex column center>
                  <Absolute layout='default' mt={20}>
                    {/* <QRStyled type='ripple' /> */}
                  </Absolute>
                  {/* <QRDisplay dimensions={78} transform='rotate(45deg)' gradientDir='145' gradient='purpink' card boxShadow={7} p={2}  /> */}
                  <Absolute top left right bottom>
                    <Image maxWidth={28} circle mx={2} src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' />
                  </Absolute>
                </Flex>
              </Absolute>
              <BackgroundGradient gradient='purpink' gradientDir='140 ' />
              {
                isCover &&
                <BackgroundImage src={GenerateImage(profile.coverPhoto)} opacity={0.2} />
              }
            </Flex>
            <Box gradient='gray' p={4} minHeight={300}>
              <Span mb={3}>{
                isImage
                  ? <Box circle p={0} boxShadow={4} maxWidth={140} mt={-180} ><Image circle p={2} bg='#ffffff8c' src={GenerateImage(profile.image)} boxShadow={'sunset'} /></Box>
                  : <Box circle p={0} boxShadow={4} maxWidth={140} mt={-180}>
                    <Image card circle boxShadow={'sunset'} p={20} src='https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg' />
                  </Box>

              }</Span>
              <Absolute layout='topRight' mt={-20} mx={3}>
                <Button borderRadius={30} variant='white' p={4}>Follow</Button>
              </Absolute>
              {
                props.biography &&
                <>
                  <Heading sm heavy>Biography</Heading>
                  <Box maxHeight={160} pr={3} overflow='auto'>
                    <Paragraph sm>
                      {profile && profile.biography}
                    </Paragraph>
                  </Box>
                </>
              }
            </Box>
          </Box>
        </Box>
      </>
  )
}

BoxLoginCard.defaultProps = {
  biography: 'Dignissim quisque sed. Congue elit duis. Pretium sapien odio per leo risus. Aenean dolor luctus vestibulum ac urna volutpat ullamcorper et. Integer laoreet tempor.',
  isFooterActive: true,
  profile: {
    biography: 'Dignissim quisque sed. Congue elit duis. Pretium sapien odio per leo risus. Aenean dolor luctus vestibulum ac urna volutpat ullamcorper et. Integer laoreet tempor. Massa euismod integer.',
  }
}


export default props =>
  <BoxInject>
    <BoxLoginCard {...props} />
  </BoxInject>