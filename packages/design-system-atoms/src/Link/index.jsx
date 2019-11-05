/* eslint-disable jsx-a11y/anchor-has-content */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

export default ({ as, href, sx, children, ...props }) =>
  <Styled.a
    as={as}
    sx={{
      ...sx,
      ...props
    }}
    href={href}
    children={children}
  />