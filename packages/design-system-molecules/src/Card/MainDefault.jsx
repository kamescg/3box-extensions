/**
 * @name Card
 * @description Standard Card Component with variant layout.s
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Image, Box, Text, Flex, Heading, Span} from '@horizin/design-system-atoms'
import { Link } from '@horizin/design-system-molecules'

const ComponentMainDefault = props => {
  const [sxMain, setSXMain] = useState({ ...props.sxMain })

  const [sxTitle, setSXTitle] = useState({ fontSize: 3, fontWeight: 500, ...props.sxTitle })
  const [sxTagline, setSXTagline] = useState({ fontSize: 2, fontWeight: 400, ...props.sxTagline })
  const [sxImage, setSXImage] = useState({ ...props.sxImage })

  const [sxImageWrap, setSXImageWrap] = useState({ ...props.sxImageWrap })
  const [sxContent, setSXContent] = useState({ fontSize: 1, ...props.sxContent })
  const [sxSummary, setSXSummary] = useState({ fontSize: 1, ...props.sxSummary })

  /**
   * @name Global
   */
  useEffect(() => {
    let style = sxMain
    if (props.mainRow)
      Object.assign(style, { flexDirection: 'row' })
    if (props.mainAlignCenter)
      Object.assign(style, { alignItems: 'center' })
    if (props.mainBetween)
      Object.assign(style, { justifyContent: 'space-between' })

    setSXMain(style)
  }, [props])

  useEffect(() => {
    if (props.variants) {
      let style = sxMain
      let styleTitle = sxTitle
      let styleTagline = sxTagline
      let styleContent = sxContent
      let styleSummary = sxSummary

      if (props.variants.includes('small')) {
        Object.assign(styleTitle, { fontSize: 2 })
        Object.assign(styleTagline, { fontSize: 1 })
        Object.assign(styleContent, { fontSize: 0 })
        Object.assign(styleSummary, { fontSize: 0 })
      }
      if (props.variants.includes('large')) {
        Object.assign(styleTitle, { fontSize: 6 })
        Object.assign(styleTagline, { fontSize: 4 })
      }
      if (props.variants.includes('xlarge')) {
        Object.assign(styleTitle, { fontSize: 7 })
        Object.assign(styleTagline, { fontSize: 5 })
        Object.assign(styleSummary, { fontSize: 2 })
      }


      if (props.variants.includes('centered')) {
        Object.assign(style, {
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        })
      }
      // Border Radius
      if (props.variants.includes('rounded')) {
        Object.assign(style, { borderRadius: 20 })
      }
      if (props.variants.includes('gem')) {
        Object.assign(style, { borderRadius: '10px 45px 10px 20px' })
      }

      //Box Shadow
      if (props.variants.includes('raised'))
        Object.assign(style, { boxShadow: 1 })
      if (props.variants.includes('lifted'))
        Object.assign(style, { boxShadow: 2 })


      // Width Contraints
      if (props.variants.includes('scopedMedium')) {
        Object.assign(style, { maxWidth: 420 })
      }
      if (props.variants.includes('scopedLarge')) {
        Object.assign(style, { maxWidth: 640 })
      }
      if (props.variants.includes('scopedXLarge')) {
        Object.assign(style, { maxWidth: 940 })
      }


    }
  }, [props.variants])
  /**
   * @name Main
   */
  useEffect(() => {
    if (props.variantsMain) {
      let style = sxMain
      if (props.variantsMain.includes('centered')) {
        Object.assign(style, {
          alignItems: 'center',
          textAlign: 'center'
        })
      }
      // Border Radius
      if (props.variantsMain.includes('rounded')) {
        Object.assign(style, { borderRadius: 20 })
      }
      if (props.variantsMain.includes('gem')) {
        Object.assign(style, { borderRadius: '10px 45px 10px 20px' })
      }

      //Box Shadow
      if (props.variantsMain.includes('raised'))
        Object.assign(style, { boxShadow: 1 })
      if (props.variantsMain.includes('lifted'))
        Object.assign(style, { boxShadow: 2 })


      // Width Contraints
      if (props.variantsMain.includes('scopedMedium')) {
        Object.assign(style, { maxWidth: 420 })
      }
      if (props.variantsMain.includes('scopedLarge')) {
        Object.assign(style, { maxWidth: 640 })
      }

      if (!props.sxIgnoreDefaults) {
        Object.assign(style, {
        })
      }


      setSXMain({ ...style })
    }
  }, [props.sxMain])


  useEffect(() => {
    let style = sxImage
    let styleWrap = sxImageWrap

    if (!props.sxIgnoreDefaults) {
      Object.assign(styleWrap, {
        maxWidth: 120,
      })
    }
    if (props.variantsImage) {
      /* Image
      /* ------------- */
      if (props.variantsImage.includes('icon')) {
        Object.assign(style, {})
        Object.assign(styleWrap, {
          bg: 'white',
          borderRadius: 9999,
          boxShadow: 1,
          p: 3,
        })
      }
      // Border Radius
      if (props.variantsImage.includes('circle')) {
        Object.assign(style, {})
        Object.assign(styleWrap, { borderRadius: 9999 })
      }
      if (props.variantsImage.includes('gem'))
        Object.assign(styleWrap, { borderRadius: '10px 45px 10px 20px' })
      if (props.variantsImage.includes('gemX'))
        Object.assign(styleWrap, { borderRadius: '45px 10px 20px 10px' })

      //Box Shadow
      if (props.variantsImage.includes('raised'))
        Object.assign(styleWrap, { boxShadow: 1 })
      if (props.variantsImage.includes('lifted'))
        Object.assign(styleWrap, { boxShadow: 2 })

      setSXImage({ ...style })
    }
    setSXImageWrap({ ...styleWrap })
  }, [props.variantsImage])



  return (
    <Flex sx={{ flexDirection: 'column', ...sxMain }}>
      <Flex sx={props.sxDetails}>
        {
          props.image &&
          <Span sx={{ ...sxImageWrap }}>
            <Image src={props.image} sx={sxImage} />
          </Span>
        }
        <Box>
          {
            props.title &&
            <Heading sx={sxTitle}>
              {
                props.isTitleLink && props.to
                  ? <Link to={`${props.toPrefix}${props.to}`}>
                    {props.title}
                  </Link>
                  : props.title
              }

            </Heading>
          }
          {
            props.tagline &&
            <Heading md heavy sx={sxTagline} >{props.tagline}</Heading>
          }
        </Box>
      </Flex>
      {
        props.summary &&
        <Text as='p' sx={sxSummary}>
          {props.summary}
        </Text>
      }
      {
        props.content &&
        <Text sx={sxContent}>
          {props.content}
        </Text>
      }
      {
        props.actions &&
        props.actions
      }
      {
        props.isLinkInsert &&
        <Link
          to={`${props.toPrefix}${props.to}`}
          {...props.linkProperties}
        >
          View
        </Link>
      }
    </Flex>
  )
}

export default ComponentMainDefault