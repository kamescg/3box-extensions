/**
 * @name Card
 * @description Standard Card Component with variant layout.s
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Text, Flex, Image, Heading, Span} from '@horizin/design-system-atoms'

const ComponentMainDefault = props => {
  const [sxMain, setSXMain] = useState({})

  const [sxTitle, setSXTitle] = useState({
    fontSize: 4,
    as: 'h2'
  })
  const [sxTagline, setSXTagline] = useState({
    fontSize: 2,
    as: 'h4'
  })
  const [sxImage, setSXImage] = useState({ ...props.sxImage })

  const [sxImageWrap, setSXImageWrap] = useState({ ...props.sxImageWrap })
  const [sxContent, setSXContent] = useState({
    fontSize: 1,
  })
  const [sxSummary, setSXSummary] = useState({
    fontSize: 1,
  })

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

      if (!props.sxIgnoreDefaults) {
        Object.assign(style, {
          bg: 'white',
          p: 4,
        })
      }

      console.log(style, 'variantsMainvariantsMain')

      setSXMain({ ...style })
    }
  }, [props.sxMain])

  useEffect(() => {
    let style = sxImage
    let styleWrap = sxImageWrap

    if (!props.sxIgnoreDefaults) {
      Object.assign(styleWrap, {
        bg: 'white',
        borderRadius: 9999,
        maxWidth: 220,
        p: 3,
      })
    }
    if (props.variantsImage) {

      /* Image
      /* ------------- */
      // Border Radius
      if (props.variantsImage.includes('circle')) {
        Object.assign(style, {})
        Object.assign(styleWrap, { borderRadius: 9999 })
      }

      //Box Shadow
      if (props.variantsImage.includes('raised'))
        Object.assign(styleWrap, { boxShadow: 1 })
      if (props.variantsImage.includes('lifted'))
        Object.assign(styleWrap, { boxShadow: 2 })

      setSXImage({ ...style })

    }
    setSXImageWrap({ ...styleWrap })
  }, [(sxImageWrap || props.variantsImage)])


  console.log(sxMain, 'sxMainsxMain')
  return (
    <Flex sx={{ flexDirection: 'column', ...sxMain }}>
      {
        props.image &&
        <Span sx={{ ...sxImageWrap }}>
          <Image src={props.image} sx={sxImage} />
        </Span>
      }
      <Heading sx={sxTitle}>
        {props.title}
      </Heading>
      <Heading md heavy sx={sxTagline} >{props.tagline}</Heading>
      {
        props.summary &&
        <Text sx={sxSummary}>
          {props.summary}
        </Text>
      }
      {
        props.content &&
        <Text sx={sxContent}>
          {props.content}
        </Text>
      }
    </Flex>
  )
}

export default ComponentMainDefault