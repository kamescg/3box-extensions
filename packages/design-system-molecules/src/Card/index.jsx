/**
 * @name Card
 * @description Standard Card Component with variant layouts
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Flex} from '@horizin/design-system-atoms'

import { useCardEffect } from '../effects'

/* --- Local --- */
import { useMainRenderEffect } from './effects'

const Card = ({ as, children, ...props }) => {
  const card = useCardEffect(props)

  const [sx, setSX] = useState({ ...props.sx })
  let render
  render = useMainRenderEffect(props)

  /**
   * @name Global
   */

  useEffect(() => {
    if (props.variants) {
      let style = sx

      if (props.variants.includes('centered')) {
        Object.assign(style, {
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        })
      }

    }
  }, [props.sxd])

  return (
    <Flex column sx={{
      ...card,
      ...sx
      }}>
      {/* Main */}
      {render.header}

      {/* Main */}
      {render.main}

      {/* Footer */}
      {render.footer}
    </Flex>
  )
}

Card.propTypes = {
  componentHeader: PropTypes.node,
  componentMain: PropTypes.node,
  componentFooter: PropTypes.node,
  isHeader: PropTypes.bool,          // Toggle Cover
  isMain: PropTypes.bool,            // Toggle Main
  isFooter: PropTypes.bool,          // Toggle Footer
  isLinkInsert: PropTypes.bool,      // Toggle Link Insert
  isTitleLink: PropTypes.bool,       // Toggle Link Insert
  isContentCentered: PropTypes.bool, // Flex Shorthand
  isMainCentered: PropTypes.bool,    // Flex Shorthand
  mainRow: PropTypes.bool,           // Flex Shorthand
  mainAlignCenter: PropTypes.bool,   // Flex Shorthand
  mainBetween: PropTypes.bool,       // Flex Shorthand
  delta: PropTypes.string,           // Unique Identifier 
  to: PropTypes.string,              // Routing
  toPrefix: PropTypes.string,        // Routing
  linkProperties: PropTypes.object,  // Routing Link
  sx: PropTypes.object,              // ui-theme
  sxHeader: PropTypes.object,        // ui-theme Header
  sxMain: PropTypes.object,          // ui-theme Main
  sxFooter: PropTypes.object,        // ui-theme Footer
  sxTitle:  PropTypes.object,        // ui-theme Title
  sxTagline:  PropTypes.object,      // ui-theme Title
  sxContent:  PropTypes.object,      // ui-theme Title
  sxSummary:  PropTypes.object,      // ui-theme Title
  sxTags:  PropTypes.object,         // ui-theme Title
}

Card.defaultProps = {
  isCover: true,
  isContentCentered: false,
  toPrefix: '/',
  componentHeader: null,
  componentMain: undefined,
  sxHeaderDefault: {
    bg: 'blue',
    boxShadow: 1,
    flexDirection: 'column',
    p: 5
  },

  sxFooterDefault: {
    bg: 'smoke',
    p: 3,
  },
}

export default Card