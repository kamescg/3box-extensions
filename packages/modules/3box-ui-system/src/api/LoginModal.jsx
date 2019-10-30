/* --- Global Dependencies --- */
import React, { useEffect, useState } from 'react'
import { Span } from '@horizin/design-system-atoms'
import { BoxInject } from '3box-ui-state'
import { useOpenRequestEffect } from './effects'

import BoxLoginCardVanity from '../components/BoxLoginCard'

/* --- React Component --- */
const Login = ({ box, ...props }) => {
  const [ isOpen, setIsOpen ] = useState(true)
  const [ request, setRequest ] = useState()
  const login = useOpenRequestEffect(box, {request})

  useEffect( () => { 
    if(box.isLoggedIn)
      setIsOpen(false)
  }, [box.isLoggedIn])

  /* --- Effects --- */
  return (
    !isOpen ? null :
    <>
      <Atom.Fixed left={0} right={0} top={0} bottom={0} zIndex={1000}>
        <Atom.BackgroundGradient gradient='black' opacity={.6} />
        <Atom.Flex center column flex={1} height='100%'>
            <Atom.Box maxWidth={400}>
              {
                !login.isLoggedIn
                ? !React.isValidElement(props.componentIsLoggedOut)
                  ? React.createElement(props.componentIsLoggedOut)
                  : props.componentIsLoading || null
                : !React.isValidElement(props.componentIsLoggedIn)
                  ? React.createElement(props.componentIsLoggedIn)
                  : props.componentIsLoading || null
              }
            </Atom.Box>
        </Atom.Flex>
      </Atom.Fixed>
    
    </>
  )
}

Login.defaultProps = {
  componentIsLoggedOut: <Atom.Box></Atom.Box>,
  componentIsLoading: <Atom.Box></Atom.Box>,
  componentIsLoggedIn: <Atom.Box></Atom.Box>,
}

Login.propTypes = {
  spaceAuto: PropTypes.bool
}




export default props =>
<BoxInject>
  <Login {...props} />
</BoxInject>