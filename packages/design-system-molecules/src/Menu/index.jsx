/* eslint-disable react-hooks/exhaustive-deps */
/* --- Global Dependencies --- */
import React, { useState, useEffect } from "react";
import { Match } from '@reach/router'

/* --- Local Dependencies --- */
import { Flex, Span, HorizontalRule, Heading} from '@horizin/design-system-atoms'
import Link from '../Link'

/* --- Module --- */
import { activateMenu } from './helpers'
const MenuItem = ({ children, label, to, icon, vertical, ...props }) => {
  const [isOpen, setOpen] = useState(props.expanded);
  const [sxChild, setStyleChild] = useState({ ...props.sxChild })
  const [sxImageWrapper, setImageWrapper] = useState({
    // bg: 'rgba(255,255,255,0.9)',
    // borderRadius: 9999,
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column',
    // p: '8px',
    mr: 2,
    // width: 18
  })
  const [sxImageWrapperChild, setImageWrapperChild] = useState({
    // bg: 'rgba(255,255,255,0.9)',
    // borderRadius: 9999,
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column',
    // p: '8px',
    width: 15
  })

  useEffect(() => {
    if (props.direction)
      if (props.direction === 'column')
        setStyleChild({
          ...sxChild,
          ml: 2,
          my: 1,
        })
  }, [props.direction])



  return (
    <Flex sx={props.sx} flexDirection={props.flexDirection || 'row'} >
      <Flex
        alignCenter between
        sx={{ alignContent: 'center', ...props.styledWrapper }}
        active={props.styledWrapperActive}>

        {props.image &&
          <Span sx={{ ...sxImageWrapper }}>{props.image}</Span>
        }

        <Flex alignCenter between width='100%'>
          <WrapperLink
            to={to}
            sx={{
              ...props.styledItemDefaults,
              ...props.styled,
              opacity: .8,
              '&.active': {
                opacity: 1
              },
              '&:hover': props.hover
            }}
            active={props.active}
            getProps={activateMenu}
          >
            <Span {...props.styledLabel}>{label}</Span>
          </WrapperLink>

          {
            children && /* Menu Item Children Toggle */
            <span onClick={() => setOpen(!isOpen)}>
              <Span sx={{ cursor: 'pointer' }} p={2} width={30} ml='auto'>
                <Span xxs opacity={.3} transform={isOpen ? 'rotate(90deg)' : ''}>{isOpen ? '▶' : '▶'}</Span>
              </Span>
            </span>
          }
        </Flex>
      </Flex>

      {
        isOpen && children &&
        <Flex flexDirection={props.flexDirection || 'row'} >
          {children.map((c, index) =>
            <Flex column key={index} sx={sxChild}>
              <WrapperLink
                to={c.to}
                className='child'
                sx={{
                  ...props.styled,
                  opacity: .8,
                  '&.active': {
                    opacity: 1
                  },
                }}
              >
                <Flex alignCenter between px={2}>
                  <Span xs>{c.label}</Span>
                  <Span sx={{ ...sxImageWrapperChild }}>{c.image && c.image}</Span>
                </Flex>
              </WrapperLink>
            </Flex>)}
        </Flex>
      }
    </Flex>
  )
}


MenuItem.defaultProps = {
  expanded: false,
  styledItemDefaults: {
    fontSize: 2,
    mx: 1,
    opacity: .8
  },
  styledItemDefaultsActive: {
    opacity: 1
  },
  styledWrapper: {},
}

/* ------- Component ------- */
export default ({ items, label, ...props }) =>
  <>
    <LabelMenu label={label} />
    <Flex flexDirection={props.direction || 'row'} sx={props.sxMenu} >
      {Array.isArray(items) && items.length > 0 &&
        items.map((item, index) =>
          <MenuItem
            expanded={props.expanded}
            key={index}
            flexDirection={props.direction || 'row'}
            {...item}
            {...props}
          />)}
    </Flex>
  </>


const WrapperLink = ({ sx, to, children, ...props }) => (
  <Match path={`${to}`}>
    {props => (
      <Link
        to={to}
        className={props.match ? 'active' : 'inactive'}
        sx={sx}
      >
        {children}
      </Link>
    )}
  </Match>
)


const LabelMenu = props => {
  return (
    props.label ?
      <>
        <Heading fontSize={[2]} as='h5' noMargin>
          {props.label}
        </Heading>
        <HorizontalRule my={2} />
      </>
      : null
  )
}

