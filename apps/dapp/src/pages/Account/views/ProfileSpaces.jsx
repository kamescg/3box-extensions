/* --- Global --- */
import { Menu } from '@horizin/design-system-molecules';
import { FormName } from '3box-ui-profiles'

/* --- Local --- */

/* --- Module --- */

const ProfileOverview = props =>
  <>
    <Atom.Box sx={{ bg: '#e4e9ec', width: '100%', p: 3 }}>
      <Menu
        items={[
          {
            label: 'Settings',
            to: '/account/settings'
          },
          {
            label: 'Backup',
            to: '/account/settings/backups'
          },
        ]}

      />
    </Atom.Box>

    <FormName />
  </>



export default ProfileOverview
