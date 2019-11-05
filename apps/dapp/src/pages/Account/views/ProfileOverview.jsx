/* --- Global --- */
import { Menu } from '@horizin/design-system-molecules';
import {
  FormName,
  FormBiography,
  FormOccupation,
} from '3box-ui-profiles'

/* --- Local --- */

/* --- Module --- */

const ProfileOverview = props =>
  <>
    <Atom.Box sx={{ bg: '#e4e9ec', width: '100%', p: 3 }}>
      <Menu
        items={[
          {
            label: 'General',
            to: '/account'
          },
          {
            label: 'Updates',
            to: '/account/updates'
          },
          {
            label: 'Key Management',
            to: '/account/keys'
          },
        ]}

      />
    </Atom.Box>

    <Atom.Box sx={{ p: 4 }}>
      <FormName />
      <FormOccupation />
      <FormBiography />
    </Atom.Box>
  </>



export default ProfileOverview
