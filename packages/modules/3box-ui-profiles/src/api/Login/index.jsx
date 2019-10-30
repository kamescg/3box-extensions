/* --- Global Dependencies --- */
import React, { useEffect, useState } from 'react'
import { Span } from '@horizin/design-system-atoms'
import { BoxInject } from '3box-ui-state'
import { useOpenRequestEffect } from '../effects'

/* --- React Component --- */
const Login = ({ box, ...props }) => {
  const [request, setRequest] = useState()
  const login = useOpenRequestEffect(box, { request })

  /* --- Effects --- */
  return (
    <>
      {
        <A.Span onClick={setRequest} >
          {
            !login.isDispatched && !login.isLoggedIn
              ? !React.isValidElement(props.componentIsLoggedOut)
                ? React.createElement(props.componentIsLoggedOut)
                : props.componentIsLoggedOut || null
              : null
          }
        </A.Span>
      }

      {
        login.isDispatched && !login.isLoggedIn
          ? !React.isValidElement(props.componentIsLoading)
            ? React.createElement(props.componentIsLoading)
            : props.componentIsLoading || null
          : null
      }

      {
        login.isLoggedIn &&
        <A.Span>
          {
            props.children || !React.isValidElement(props.componentIsLoggedIn)
              ? React.createElement(props.componentIsLoggedIn)
              : props.componentIsLoggedIn || null
          }
        </A.Span>
      }

    </>
  )
}

Login.defaultProps = {
  componentIsLoggedOut: <Span pointer xs tag='white'>Login <A.Span opacity={.6} pl={1} ><A.LoadingSquare /></A.Span></Span>,
  componentIsLoading: <Span pointer xs tag='white'>Loading <A.Span pl={1}><A.LoadingSquare className='active' /></A.Span></Span>,
  componentIsLoggedIn: <Span pointer xs tag='white'>Active <A.Span pl={1}><A.LoadingSquare className='slow' /></A.Span></Span>,
}

Login.propTypes = {
  spaceAuto: PropTypes.bool
}




export default props => <BoxInject><Login {...props} /></BoxInject>