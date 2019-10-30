/**
 * @name ThreadListen
 * @version 1.0.0
 * @description Dispatch thread listen request. 
 */
/* --- Global Dependencies --- */
import React, { useEffect, useState } from 'react'
import { Span } from '@horizin/design-system-atoms'
import { BoxInject } from '3box-ui-state'
import { useOpenRequestEffect, useThreadListenEffect } from './effects'

/* --- React Component --- */
const ThreadListen = ({ box, ...props }) => {
  const pass ={
    listen: true,
    ...props
  }
  const listen = useThreadListenEffect(box, pass)
  console.log(listen)

  /* --- Effects --- */
  return (
    <>
   
    </>
  )
}

ThreadListen.defaultProps = {

}

ThreadListen.propTypes = {
}




export default props =><BoxInject><ThreadListen {...props} /></BoxInject>