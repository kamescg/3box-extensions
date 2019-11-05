/* --- Global --- */
import { Menu } from '@horizin/design-system-molecules';

/* --- Local --- */
import { Site } from 'templates'

const AccountTemplate = ({ children }) =>
<Site>
  <Atom.Flex flex={1}>
    <Atom.Flex column flex={7}>
        {children}
    </Atom.Flex>
  <Atom.Flex flex={2} sx={{bg: 'smoke'}} >
    <Atom.Box sx={{ flex: 1, p:3 }}>
      <Menu
        label='Account Menu'
        direction='column'
        sx={{
          my: 2
        }}
        items={[
          {
            label:'Overview',
            to:'/account'
          },
          {
            label:'Settings',
            to:'/account/settings'
          },
          {
            label:'Spaces',
            to:'/account/spaces'
          },
          {
            label:'Threads',
            to:'/account/threads'
          },
          {
            label:'Files',
            to:'/account/files'
          },
        ]}
      
      />
    </Atom.Box>

  </Atom.Flex>
</Atom.Flex>

</Site>


export default AccountTemplate
