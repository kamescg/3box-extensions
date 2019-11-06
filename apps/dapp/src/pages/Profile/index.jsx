import { Site } from 'templates'
import { ProfileCard, ProfileCardVanity, ProfileCardShowcase } from '3box-ui-profiles'
import { 
  ProfileIdentityName,
  ProfileIdentityDetails,
  ProfileIdentitySocial
} from 'components/profile'

const Profile = props => 
<Site>


  <Atom.Box
  sx={{
    bg: 'paper',
    color: 'text',
    py: 6,
    textAlign: 'center'
    }}>
    <Atom.Container>
      <Atom.Flex>
        <Atom.Flex center column sx={{flex:1}}>

          <ProfileCardVanity 
            address='0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d'
          />
        </Atom.Flex>
        <Atom.Flex center column sx={{flex:1}}>
          <Atom.Box sx={{textAlign: 'left'}}>
            <Atom.Heading xxl>Decentralized Identity</Atom.Heading>
            <Atom.Heading md thin>How to make sense of your decentralized identity.</Atom.Heading>
            <Atom.Paragraph xs>
              Etiam eget dolor quis dolor blandit ullamcorper sed sit amet risus. Etiam quis sapien malesuada, fermentum arcu sed, vehicula enim. Maecenas convallis tortor et arcu pretium commodo. Cras congue fermentum pellentesque. Proin ullamcorper rutrum risus, eget tempus libero fermentum eu.
            </Atom.Paragraph>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  </Atom.Box>

  <Atom.Container sx={{my: 3}}>
    <Atom.Flex>
      <Atom.Box sx={{flex: 1, p: 4}}>
        <Atom.Image src='https://image.flaticon.com/icons/svg/1388/1388525.svg' sx={{maxWidth: 40}} />
        <Atom.Heading>Identity</Atom.Heading>
        <Atom.Paragraph sx={{fontSize: 1}}>
          Etiam eget dolor quis dolor blandit ullamcorper sed sit amet risus. Etiam quis sapien malesuada, fermentum arcu sed, vehicula enim. Maecenas convallis tortor et arcu pretium commodo.
        </Atom.Paragraph>
      </Atom.Box>
      <Atom.Box sx={{flex: 1, p: 4}}>
      <Atom.Image src='https://image.flaticon.com/icons/svg/1373/1373263.svg' sx={{maxWidth: 40}} />
        <Atom.Heading>Details</Atom.Heading>
        <Atom.Paragraph sx={{fontSize: 1}}>
          Etiam eget dolor quis dolor blandit ullamcorper sed sit amet risus. Etiam quis sapien malesuada, fermentum arcu sed, vehicula enim. Maecenas convallis tortor et arcu pretium commodo.
        </Atom.Paragraph>
      </Atom.Box>
      <Atom.Box sx={{flex: 1, p: 4}}>
      <Atom.Image src='https://image.flaticon.com/icons/svg/1256/1256650.svg' sx={{maxWidth: 40}} />
        <Atom.Heading>Persona</Atom.Heading>
        <Atom.Paragraph sx={{fontSize: 1}}>
          Etiam eget dolor quis dolor blandit ullamcorper sed sit amet risus. Etiam quis sapien malesuada, fermentum arcu sed, vehicula enim. Maecenas convallis tortor et arcu pretium commodo.
        </Atom.Paragraph>
      </Atom.Box>

    </Atom.Flex>
  </Atom.Container>

  

  <ProfileIdentityName />

  <DetailsOverview/>
  <ProfileIdentityDetails />

  <ProfileCardShowcase/>
  <ProfileIdentitySocial />
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


  </Atom.Flex>
</Site>

export default Profile


const DetailsOverview = props =>
<Atom.Box
  sx={{
    bg: 'paper',
    color: 'text',
    py: 6,
    textAlign: 'center'
    }}>
    <Atom.Container>
      <Atom.Flex>

        <Atom.Flex center column sx={{flex:1}}>
          <Atom.Box sx={{textAlign: 'right'}}>
            <Atom.Heading xxl>Sharing Your Details</Atom.Heading>
            <Atom.Heading md thin>Share specific information about you with the world.</Atom.Heading>
            <Atom.Paragraph xs>
              Etiam eget dolor quis dolor blandit ullamcorper sed sit amet risus. Etiam quis sapien malesuada, fermentum arcu sed, vehicula enim. Maecenas convallis tortor et arcu pretium commodo. Cras congue fermentum pellentesque. Proin ullamcorper rutrum risus, eget tempus libero fermentum eu.
            </Atom.Paragraph>
          </Atom.Box>
        </Atom.Flex>
        <Atom.Flex center column sx={{flex:1}}>

          <ProfileCardVanity 
            address='0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d'
          />
        </Atom.Flex>

      </Atom.Flex>
    </Atom.Container>
  </Atom.Box>