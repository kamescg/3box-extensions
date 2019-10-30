
/* --- Global Dependencies --- */
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { Span, Flex, Image } from '@horizin/design-system-atoms'
import { BoxInject } from '3box-ui-state'

/* ------- Component ------- */
const BoxVerified = ({box, loadingMessage, display, styled, ...props }) => {
  const [ isEmail , setIsEmai, ] = useState(false)
  const [ isEmailVerified, setIsEmailVerified ] = useState(false)
  const [ isGithub , setIsGithub ] = useState(false)
  const [ isTwitter , setIsTwitter ] = useState(false)
  /**
   * @function VerificationsState
   * @description Manage the state of verifications
   */
  useEffect( () => { 
    if(box.verifications) {
      const verifications = Object.keys(box.verifications)
      setIsEmai(verifications.includes('email'))
      setIsGithub(verifications.includes('github'))
      setIsTwitter(verifications.includes('twitter'))
    }
  }, [box.verifications])

return !box.verifications
? loadingMessage ? <Span>{loadingMessage}</Span> : null
: <>
    <Flex between>
      {
        !isGithub
        ? <Span xxs thin tag='white'>
            <Flex alignCenter>
              <Image src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' maxWidth={18} mr={2}/>
              <Span>Verify</Span>
            </Flex>
          </Span>
        : <Span xxs tag='white'>
            <a href={`https://github.com/${box.verifications.github.username}`}>
              <Flex alignCenter>
                <Image src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' maxWidth={18} mr={2}/>
                <Span>{box.verifications.github.username}</Span>
              </Flex>
            </a>
          </Span>
      }
      {
        !isTwitter
        ? <Span xxs thin tag='white' mx={2}>
            <Flex alignCenter>
              <Image src='http://goinkscape.com/wp-content/uploads/2015/07/twitter-logo-final.png' maxWidth={18} mr={2}/>
              <Span>Verify</Span>
            </Flex>
          </Span>
        : <Span xxs tag='white' color='blue' mx={3}>
            <a href={`https://twitter.com/${box.verifications.twitter.username}`}>
                <Flex alignCenter>
                  <Image src='http://goinkscape.com/wp-content/uploads/2015/07/twitter-logo-final.png' maxWidth={18} mr={2}/>
                  <Span>{box.verifications.twitter.username}</Span>
                </Flex>
              </a>
          </Span>
      }
      {
        !isEmail
        ? <Span xxs thin tag='white'>
            <Flex alignCenter>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0XdyBBhy5KQBP2sIrvFsWIBMwOxz064mxn-2SR6Tl_MlQ5e8' maxWidth={18} mr={2}/>
              <Span>Unlock</Span>
            </Flex>
          </Span>
        : isEmailVerified
          ? <Span xxs tag='white'>Email Verified</Span>
          : <Span xxs tag='white'>Verify Email</Span>
      }
    </Flex>
  </>
}

BoxVerified.propTypes = {
  loadingMessage: PropTypes.string,
  display: PropTypes.oneOf([
    'did',
    'ethereum',
    'twitter',
    'github'
  ])
}

BoxVerified.defaultProps = {
  display: ['twitter', 'github'],
}

export default props =>
<BoxInject>
  <BoxVerified {...props} />
</BoxInject>