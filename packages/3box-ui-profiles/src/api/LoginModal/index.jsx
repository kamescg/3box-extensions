/* --- Global Dependencies --- */
import React, { useEffect, useState } from 'react'
import { BoxInject } from '3box-ui-state'
import { useOpenRequestEffect } from '../effects'

import LoginCard from '../LoginCard'

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
      <A.Fixed left={0} right={0} top={0} bottom={0} zIndex={1000}>
        <A.BackgroundGradient gradient='black' opacity={.6} />
        <A.Flex center column flex={1} height='100%'>
            <A.Box maxWidth={400}>
              {
                !login.isLoggedIn
                ? !React.isValidElement(props.componentIsLoggedOut)
                  ? React.createElement(props.componentIsLoggedOut)
                  : props.componentIsLoading || null
                : !React.isValidElement(props.componentIsLoggedIn)
                  ? React.createElement(props.componentIsLoggedIn)
                  : props.componentIsLoading || null
              }
            </A.Box>
        </A.Flex>
      </A.Fixed>
    
    </>
  )
}

Login.defaultProps = {
  componentIsLoggedOut: <LoginCard />,
  componentIsLoading: <LoginCard />,
  componentIsLoggedIn: <LoginCard />,
}

Login.propTypes = {
  spaceAuto: PropTypes.bool
}




export default props =>
<BoxInject>
  <Login {...props} />
</BoxInject>