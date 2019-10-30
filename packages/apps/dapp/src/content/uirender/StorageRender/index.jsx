const StorageRender = props => {
  return (
    <Atom.Container my={3} maxWidth={1080}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p: 4}}>
          <Atom.Heading md heavy>Render Data from Storage</Atom.Heading>
          <Atom.Paragraph>
            Retrieve data from Storage and pass into component factory.
          </Atom.Paragraph>
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {
`import { StorageRender } from '3box-ui-system-render'

export default props =>
<StorageRender
  space='esence'
  access='private'
  component={props.component}
  pass={props.pass}
/>
`
                }
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

export default StorageRender