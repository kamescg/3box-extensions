import React from 'react'
import { useColorMode } from 'theme-ui'

export default props => {
  const [colorMode, setColorMode] = useColorMode()
  return (
      <Atom.Span
        pointer
        onClick={e => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}>
        {
          colorMode === 'default' 
          ? <Atom.Image sx={{maxWidth: 20}} src='https://image.flaticon.com/icons/svg/1574/1574218.svg' />
          : <Atom.Image sx={{maxWidth: 25}} src='https://image.flaticon.com/icons/svg/305/305208.svg' />
          } 
      </Atom.Span>
  )
}