/**
 * @name Card
 * @description Standard Card Component with variant layout.s
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

/* --- Module --- */
import HeaderDefault from './HeaderDefault'
import HeaderShowcase from './HeaderShowcase'

import MainDefault from './MainDefault'
import MainShowcase from './MainShowcase'
import FooterDefault from './FooterDefault'

export const useMainRenderEffect = (props) => {
  // Sub-Component States
  const [header, setComponentHeader] = useState(props.componentHeader)
  const [main, setComponentMain] = useState(props.componentMain)
  const [footer, setComponentFooter] = useState(props.componentFooter)

  useEffect(() => {
    switch (props.layout) {
      case 'default':
        setComponentHeader(<HeaderDefault {...props} />)
        setComponentMain(<MainDefault {...props} />)
        setComponentFooter(<FooterDefault {...props} />)
        break;
      case 'showcase':
        setComponentHeader(<HeaderShowcase {...props} />)
        setComponentMain(<MainDefault {...props} />)
        setComponentFooter(null)
        break;
      default:
        setComponentHeader(<HeaderDefault {...props} />)
        setComponentMain(<MainDefault {...props} />)
        setComponentFooter(<FooterDefault {...props} />)
        break;
    }
  }, [props.type])

  return {
    header,
    main,
    footer
  }
}
