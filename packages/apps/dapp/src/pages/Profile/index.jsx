import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types'

// import { isAddress } from 'helpers/ethers'
import {
  ProfileLineItem,
  effects,
} from '3box-ui-profiles'

import {
  ProfileAvatar,
  ProfileCover,
  ProfileDetails,
  ProfileIdentity
} from '3box-ui-profiles'


import { RegionTop } from 'core'
const Page = ({ box, styled, ...props }) => {
  const [address, setAddress] = useState(props.address)
  const [isAddressValid, setAddressValid] = useState(false)

  /* --- Profile State --- */
  const [profile, setProfile] = useState()
  const [isAvatar, setAvatar] = useState()
  const [isCover, setCover] = useState()
  const [isName, setName] = useState()
  const [isJob, setJob] = useState()

  const request = effects.useProfileRetrieveEffect(box, props)


  useEffect(() => {
    if (props.address)
      setAddressValid(true)
  }, [props.address])

  useEffect(() => {
    if (request.isReady)
      setProfile(request.profile)
    if (request.profile.image) setAvatar(true)
    if (request.profile.coverPhoto) setCover(true)
    if (request.profile.id && request.profile.id.name) setName(true)
    if (request.profile.id && request.profile.id.occupation) setJob(true)
  }, [request.isReady])

  return (
    <A.Box width='100%'>
      <RegionTop bg='#1e1e2d' color='white' borderBottom='3px solid #dc448d' p={2} />
      {!profile ? null :
        <A.Box width={1}>
          <A.Box gradient='blueDark' py={5} >
            <ProfileCover image={profile.coverPhoto} opacity={.2} />

            <A.Container py={4}>

              <A.Flex alignCenter between flex={1}>
                <A.Flex alignCenter>
                  <A.Box>
                    <ProfileAvatar image={profile.image} dimensions={145} borderRadius={20} boxShadow='blueFaint' border='2px solid #FFF' />
                  </A.Box>
                  <A.Box ml={4}>
                    <ProfileIdentity
                      profile={profile}
                      styled={{
                        color: 'white'
                      }}
                    />
                    <A.Flex mt={2}>
                      <A.Button xs variant='primary'>23 Followers</A.Button>
                      <A.Button xs variant='primary' mx={3}>87 Following</A.Button>
                      <A.Button xs variant='secondary'>3 Projects</A.Button>
                    </A.Flex>
                  </A.Box>
                </A.Flex>

                {/* Right */}
                <A.Box>
                  <A.Flex>
                    <A.Button flex={1} xs variant='purple' mr={1}>Message</A.Button>
                    <A.Button flex={1} xs variant='purple' ml={1}>Follow</A.Button>
                  </A.Flex>
                  <A.Button mt={3} variant='secondary' width={1}>Fund Projects</A.Button>
                </A.Box>

              </A.Flex>
            </A.Container>

          </A.Box>
          <A.Flex>

            {/* Aside */}
            <A.Flex column gradient='white' py={4} px={6} flex={5}>
              <A.Box mt={0}>
                <A.Box gradient='gray' p={3}>
                  <A.Flex alignCenter between>
                    <A.Heading noMargin>Top Followers</A.Heading>
                    <A.Button xs variant='secondary'>View Followers</A.Button>
                  </A.Flex>
                  <A.Flex column flex={1} mt={2}>
                    <ProfileLineItem address={props.address} />
                    <ProfileLineItem address={props.address} />
                    <ProfileLineItem address={props.address} />
                    <ProfileLineItem address={props.address} />
                    <ProfileLineItem address={props.address} />
                  </A.Flex>
                </A.Box>
              </A.Box>
            </A.Flex>


            {/* Main */}
            <A.Flex py={4} flex={8}>

            </A.Flex>


          </A.Flex>
        </A.Box>}
    </A.Box>
  )
}


Page.defaultProps = {
  styled: {}
}

Page.propTypes = {
  styled: PropTypes.object
}

export default props => <DID.Context>{box => (<Page box={box} {...props} />)}</DID.Context>