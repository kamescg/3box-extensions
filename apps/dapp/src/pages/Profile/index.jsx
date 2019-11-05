import { Site } from 'templates'
import { ProfileCard, ProfileCardVanity, ProfileCardShowcase } from '3box-ui-profiles'
import { 
  ProfileIdentityName,
  ProfileIdentityDetails,
  ProfileIdentitySocial
} from 'components/profile'

const Profile = props => 
<Site>
  <ProfileCardShowcase/>
  <Atom.Flex column>
    <Atom.Box
    sx={{
      bg: 'blue',
      color: 'white',
      py: 6,
      textAlign: 'center'
      }}>
      <Atom.Container>
        <Atom.Flex center column>
          <ProfileCardVanity 
            address='0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d'
          />
        </Atom.Flex>
      </Atom.Container>
    </Atom.Box>
    <Atom.Box sx={{py: 5}}>
      <Atom.Container>
        <ProfileIdentityName />
        <ProfileIdentityDetails />
        <ProfileIdentitySocial />
      </Atom.Container>
    </Atom.Box>

  </Atom.Flex>
</Site>

export default Profile