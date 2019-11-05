/* --- Global Dependencies --- */
import React, { useEffect, useState } from 'react'
import { Absolute, Box, Button, Span, Image, Flex, Heading, Loading } from '@horizin/design-system-atoms'
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
    !props.auto ? !box.address
      ? box.isEnableRequested && !box.isEnableSuccess
        ? <Button variant='white' onClick={box.enable}><Flex alignCenter>
          <Box>
            <Image maxWidth={36} mx={2} src='https://metamask.io/img/metamask.png' />
          </Box>
          <a href='https://metamask.io/' target='_blank'>
            <Span>Install MetaMask to Enable</Span>
          </a>
        </Flex>
        </Button>
        : <Button variant='dark' onClick={box.enable}><Flex alignCenter>
          <Box>
            <Absolute top={-10} left={-2} ><Loading type='ripple' /></Absolute>
            <Image maxWidth={36} circle mx={2} src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' />
          </Box>
          <Span>Enable ETH Blockchain</Span>
        </Flex>
        </Button>
      : box.instance && !box.isLoggedIn
        ? <ButtonLogin
          box={box}
          isLoggingIn={box.isLoggingIn}
          {...styled}
          {...props}
        />
        : box.profile
          ? <Flex center column>
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
                  {/* <Span xxs pointer mt={1} >Logout</Span> */}
                </Flex>
              </Flex>
              {
                isMenuAvailable &&
                <Flex center column position='absolute' relative={false} top={0} bottom={0} right={-10} >

                </Flex>
              }
            </Button>
          </Flex>
          : null
      : null
  )
}

const AccountManage = ({ styled, ...props }) => {
  return (
    <Box bg='white' p={20} minWidth={270}>
      <Flex column>
        <Span xs>Profile</Span>
        <Span xs>Credentials</Span>
        <Span xs>Spaces</Span>
        <Span xs>Threads</Span>
      </Flex>
    </Box>
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