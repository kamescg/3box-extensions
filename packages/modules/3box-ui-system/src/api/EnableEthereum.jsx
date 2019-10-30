/* --- Global Dependencies --- */
import React, { useEffect, useState } from 'react'
import { Span } from '@horizin/design-system-atoms'
import { BoxInject } from '3box-ui-state'
import { useEnableEffect } from './effects'

/* --- React Component --- */
const EnableEthereum = ({ box, ...props }) => {
  const enabled = useEnableEffect(box)


  /* --- Effects --- */
  return (
    <>
    {
      <span onClick={()=>box.enable()} >
        {
          !enabled.dispatched && !enabled.ready
          ? !React.isValidElement(props.componentIsDisconnected)
            ? React.createElement(props.componentIsDisconnected)
            : props.componentIsDisconnected || null
          : null
        }
      </span>
    }

    <span>{
      enabled.dispatched && !enabled.ready
      ? !React.isValidElement(props.componentIsLoading)
          ? React.createElement(props.componentIsLoading)
          : props.componentIsLoading || null
      : null
    }</span>

    {
      enabled.ready &&
      <span>
        {
          props.children || !React.isValidElement(props.componentIsConnected)
            ? React.createElement(props.componentIsConnected)
            : props.componentIsConnected || null
        }
      </span>
    }
    
    </>
  )
}

EnableEthereum.defaultProps = {
  componentIsDisconnected: (
    <Span variants={['tag']} effects={['white', 'pointer']} >Enable</Span>
    ),
  componentIsLoading: (
    <Span variants={['tag']} effects={['white']} >Loading</Span>
  ),
  componentIsConnected:(
    <Span variants={['tag']} effects={['white', 'pointer']} >Etheruem Enabled</Span>
    )
}

EnableEthereum.propTypes = {
  spaceAuto: PropTypes.bool
}




export default props => <BoxInject><EnableEthereum {...props} /></BoxInject>