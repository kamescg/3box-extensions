import { RegionTop, RegionFooter } from 'core'

const SiteTemplate = ({ sx, sxMain, styled, children, ...props }) => {
  return (
    <A.Flex column flex={1} minHeight='100vh' sx={sx} >
      <RegionTop bg='#1e1e2d' color='white' borderBottom='3px solid #dc448d' p={2} />
      <A.Flex column flex={1} width='100%' sx={sxMain}>
        {children}
      </A.Flex>
      <RegionFooter bg='#1e1e2d' color='white' borderTop='2px solid #dc448d' p={3} />
    </A.Flex>
  )
}


SiteTemplate.defaultProps = {
  styled: {}
}

SiteTemplate.propTypes = {
  styled: PropTypes.object
}

export default SiteTemplate