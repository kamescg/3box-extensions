/* --- Global Dependencies --- */
import React, { useEffect, useState } from 'react'
import { Absolute, Box, Button, Span, Image, Flex, Heading, Loading } from '@horizin/design-system-atoms'
import {
  Toast
} from '@horizin/design-system-organisms'
import { BoxInject } from '3box-ui-state'
import makeBlockie from 'ethereum-blockies-base64';

/* --- React Component --- */
const BoxLoginButton = ({ box, isMenuAvailable, styled, children, ...props }) => {
  /* --- State --- */
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [blockie, setBlockie] = useState()

  /* --- Effects --- */
  /**
   * @function AutoOpenEffect
   * @description
   * Automatically connect to space without user input.
   */
  useEffect(() => {
    if (props.auto) {
      box.login()
    }
  }, [props.auto])

  /**
   * @function IsLoggedInEffect
   * @description
   * Watch LoggedIn State
   */
  useEffect(() => {
    if (box.isLoggedIn)
      setIsLoggedIn(true)
  }, [box.isLoggedIn])

  /**
   * @function IsLoggingInEffect
   * @description
   * Watch LoggingIn State
   */
  useEffect(() => {
    if (box.isLoggingIn)
      setIsLoggingIn(true)
  }, [box.isLoggingIn])

  /**
   * @function MakeBlockieEffect
   */
  useEffect(() => {
    if (box.address) {
      const block = makeBlockie(box.address)
      setBlockie(block)
    }
  }, [box.address])

  return (
    <>
      {
        !box.address &&
        <EnableEthereumRequestButton box={box} />
      }
      {
        box.address && !isLoggedIn &&
        <LoginRequestButton box={box} isLoggingIn={isLoggingIn} isLoggedIn={isLoggedIn} />
      }
      {
        box.address && isLoggedIn &&
        <LoginSuccessButton box={box} isLoggingIn={isLoggingIn} isLoggedIn={isLoggedIn} />
      }
    </>
  )
}

/**
 * @function EnableEthereumRequestButton
 * @param {*} param0 
 */
const EnableEthereumRequestButton = ({ box, styled, ...props }) =>
  <Button variant='dark' onClick={box.enable}><Flex alignCenter>
    <Box>
      <Absolute top={-10} left={-2} ><Loading type='ripple' /></Absolute>
      <Image maxWidth={36} circle mx={2} src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' />
    </Box>
    <Span>Enable ETH Blockchain</Span>
  </Flex>
  </Button>


/**
 * @function LoginRequestButton
 * @param {Object} props
 */
const LoginRequestButton = ({ box, children, ...props }) =>
  <Button {...props.styled} {...props} onClick={() => box.login()} >
    {
      props.isLoggingIn
        ? <Span pl={10} pr={10}>Loading...</Span>
        : <Span>
          {
            children ? children : <><strong>ΞID</strong> Login</>
          }
        </Span>
    }
  </Button>

/**
 * @function LoginSuccessButton
 * @param {Object} props
 */
const LoginSuccessButton = props =>
  <Button white fullWidth cursor='unset' {...styled} {...props}>
    <Flex alignCenter between fullWidth ml={-25}>
      <Flex alignCenter >
        <Image src={blockie} maxWidth={28} boxShadow={0} borderRadius={7} border='1px solid #FFF' mx={10} />
      </Flex>
      <Flex alignCenter>
        <Span thin fontSize='0.9em'><strong>ΞID:</strong> {box.addressShortened}</Span>
        <Span pointer onClick={box.logout} mt={1}>
          <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnf--Q71hav8LNlvIbJ8MGNNOU6gLSj7uYfmYYnWP6kiXDrj5-'} maxWidth={14} ml={2} />
        </Span>
      </Flex>
    </Flex>
    {
      isMenuAvailable &&
      <Flex center column position='absolute' relative={false} top={0} bottom={0} right={-10} >
        <Toast
          label='Manage Account'
          content={<AccountManage />}>
          <Flex pointer center column circle gradient='gray' boxShadow={0} width={28} height={28} p={1}>
            <Span pointer fontSize='.9em' lineHeight='0' heavy textRight><strong>Ξ</strong></Span>
          </Flex>
        </Toast>
      </Flex>
    }
  </Button>


BoxLoginButton.defaultProps = {
  isMenuAvailable: true,
  auto: false
}

export default props =>
  <BoxInject>
    <BoxLoginButton {...props} />
  </BoxInject>