/* --- Global Dependencies --- */
import React, { useEffect, useState } from 'react'
import { Absolute, Box, Button, Span, Image, Flex, Heading, Toast, Loading } from '@horizin/design-system-atoms'
import { BoxInject } from '3box-ui-state'
import makeBlockie from 'ethereum-blockies-base64';

/* --- React Component --- */
const BoxLoginButton = ({ box, isMenuAvailable, styled, children, ...props }) => {
  const [blockie, setBlockie] = useState()
  useEffect(() => {
    if (box.address) {
      const block = makeBlockie(box.address)
      setBlockie(block)
    }
  }, [box.address])

  /**
 * @function AutoEffect
 * @description Automatically connect to space without requiring use input.
 */
  useEffect(() => {
    if (props.auto) {
      box.login()
    }
  }, [props.auto])

  return (
    !box.address
      ?
      <Box onClick={box.enable}>
        <Absolute top={-10} left={-2} ><Loading type='ripple' /></Absolute>
        <Image maxWidth={22} circle mx={2} src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' />
      </Box>
      : box.instance && !box.isLoggedIn
        ? <Span pointer onClick={box.open}><Image circle card p={1} maxWidth={22} circle mx={2} src='https://pbs.twimg.com/profile_images/1125210143484985344/6Kae1Al3_400x400.png' /></Span>
        : <Span xs tag='blue' >Ξ</Span>
  )
}

const ButtonLogin = ({ box, isLoggingIn, styled, children, ...props }) => {
  return (
    <Button {...styled} {...props} onClick={() => box.login()} >
      {
        isLoggingIn
          ? <Span pl={10} pr={10}>Loading...</Span>
          : <Span>
            {
              children ? children : <><strong>ΞID</strong> Login</>
            }
          </Span>
      }
    </Button>
  )
}

BoxLoginButton.defaultProps = {
  isMenuAvailable: true,
  auto: false
}

export default props =>
  <BoxInject>
    <BoxLoginButton {...props} />
  </BoxInject>