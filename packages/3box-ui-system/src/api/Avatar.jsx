/**
 * @function Avatar
 * @description Display Profile Avatar with menu options.
 * @todo Add menu :)
 */
/* --- Global --- */
import React from 'react'
import { BoxInject } from '3box-ui-state'
import ProfileImage from './ProfileImage'

/* --- Component --- */
const Avatar = ({ box, variant, children, styled,...props  }) => <ProfileImage opacity={1}/> 

export default props =><BoxInject><Avatar {...props} /></BoxInject>
