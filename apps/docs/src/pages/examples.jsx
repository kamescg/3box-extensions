
import { Site } from 'templates'

const showcase = {
  title: 'Examples',
  tagline: 'Experience the 3ID System first hand.',
}

/* --- Content --- */
const featureOne = {
  title: 'Authentication',
  tagline: 'Connect to Etheruem',
  summary: 'Proin commodo venenatis felis mollis porta. Phasellus pretium elit et neque gravida, eget malesuada dui placerat. Proin quis luctus libero.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673590.svg',

}
const featureTwo = {
  title: 'Storage',
  tagline: 'Store Data in the Cloud',
  summary: 'Proin commodo venenatis felis mollis porta. Phasellus pretium elit et neque gravida, eget malesuada dui placerat. Proin quis luctus libero.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673612.svg',
}
const featureThree = {
  title: 'Communication',
  tagline: 'Chat with The World',
  summary: 'Proin commodo venenatis felis mollis porta. Phasellus pretium elit et neque gravida, eget malesuada dui placerat. Proin quis luctus libero.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673579.svg',
}

/* --- Component --- */
const Home = props =>
  <Site sx={{ bg: 'smoke' }} sxMain={{ alignItems: 'center', justifyContent: 'center' }}>
    <Molecule.Card
      layout='showcase'
      variants={['large', 'centered']}
      sx={{
        my: 5,
        p: 3
      }}
      sxTitle={{
        fontWeight: 700
      }}
      sxTagline={{
        fontWeight: 300
      }}
      sxMain={{
        maxWidth: 980
      }}
      {...showcase}
      image={null}
    />

    <FeatureElements />

  </Site>

export default Home


const FeatureOverivew = props => {
  return (
    <Atom.Container maxWidth={780} sx={{ bg: 'white', borderRadius: 20, p: 4, ...props.sx }}>
      <Atom.Flex alignCenter flex={1}>
        <Atom.Flex column flex={1}>
          <Atom.Heading md m={0}>Apply New Themes & Styles</Atom.Heading>
          <Atom.Paragraph xxs>
            Etiam et tortor vel nunc vehicula dignissim at vitae dui. Aenean placerat quis nibh semper volutpat. Nullam a pulvinar eros. Vestibulum risus lectus, commodo quis nunc sed.
          </Atom.Paragraph>
          <Atom.Heading md>Component Catalog</Atom.Heading>
          <Atom.Paragraph xxs>
            Etiam et tortor vel nunc vehicula dignissim at vitae dui. Aenean placerat quis nibh semper volutpat. Nullam a pulvinar eros. Vestibulum risus lectus, commodo quis nunc sed.
          </Atom.Paragraph>
        </Atom.Flex>
        <Atom.Flex center column sx={{ flex: 1, p: 3 }}>
          <Atom.Image sx={{ borderRadius: 99999, maxWidth: 240 }} src='https://cdn.dribbble.com/users/2530474/screenshots/6434277/course_app_4x.png' />
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

const CryptoOverivew = props => {
  return (
    <Atom.Container maxWidth={780} sx={{ bg: 'white', borderRadius: 20, p: 4, ...props.sx }}>
      <Atom.Flex alignCenter flex={1}>
        <Atom.Flex column flex={1} order={2}>
          <Atom.Heading md m={0}>Apply New Themes & Styles</Atom.Heading>
          <Atom.Paragraph xxs>
            Etiam et tortor vel nunc vehicula dignissim at vitae dui. Aenean placerat quis nibh semper volutpat. Nullam a pulvinar eros. Vestibulum risus lectus, commodo quis nunc sed.
          </Atom.Paragraph>
          <Atom.Heading md>Component Catalog</Atom.Heading>
          <Atom.Paragraph xxs>
            Etiam et tortor vel nunc vehicula dignissim at vitae dui. Aenean placerat quis nibh semper volutpat. Nullam a pulvinar eros. Vestibulum risus lectus, commodo quis nunc sed.
          </Atom.Paragraph>
        </Atom.Flex>
        <Atom.Flex center column sx={{ flex: 1, p: 3 }}>
          <Atom.Image sx={{ borderRadius: 99999, maxWidth: 240 }} src='https://cdn.dribbble.com/users/2530474/screenshots/6434277/course_app_4x.png' />
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}

const FeatureElements = props =>
  <Atom.Container>
    <Atom.Flex alignCenter>
      <Atom.Flex flex={1}>
        <Atom.Box sx={{ p: 3 }}>
          <Atom.Image sx={{ borderRadius: 20 }} src='https://cdn.dribbble.com/users/2530474/screenshots/6434277/course_app_4x.png' />
        </Atom.Box>
      </Atom.Flex>
      <Atom.Flex flex={1}>
        <Atom.Box sx={{ p: 3 }}>
          <Atom.Heading xl thin>A Collection of Essential Elements</Atom.Heading>
          <Atom.Heading md heavy>Compose a Unique Identity Experience</Atom.Heading>
          <Atom.Paragraph>
            Etiam et tortor vel nunc vehicula dignissim at vitae dui. Aenean placerat quis nibh semper volutpat. Nullam a pulvinar eros. Vestibulum risus lectus, commodo quis nunc sed, laoreet cursus nibh. Sed nibh metus, vulputate id turpis ut, congue ornare dolor. Nam lacinia arcu quis congue pulvinar. Praesent tempor imperdiet tortor. Ut eu rutrum nibh. Phasellus suscipit eleifend ipsum.
        </Atom.Paragraph>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  </Atom.Container>

const FeatureTechnology = props =>
  <Atom.Container sx={props.sx}>
    <Atom.Flex alignCenter>
      <Atom.Flex flex={1} order={2}>
        <Atom.Box sx={{ p: 3 }}>
          <Atom.Image sx={{ borderRadius: 20 }} src='https://cdn.dribbble.com/users/2530474/screenshots/6434277/course_app_4x.png' />
        </Atom.Box>
      </Atom.Flex>
      <Atom.Flex flex={1}>
        <Atom.Box sx={{ p: 3 }}>
          <Atom.Heading xl thin>Core Cryptography Simplified</Atom.Heading>
          <Atom.Heading md heavy>Build a User Experience. We'll handle the rest.</Atom.Heading>
          <Atom.Paragraph>
            Etiam et tortor vel nunc vehicula dignissim at vitae dui. Aenean placerat quis nibh semper volutpat. Nullam a pulvinar eros. Vestibulum risus lectus, commodo quis nunc sed, laoreet cursus nibh. Sed nibh metus, vulputate id turpis ut, congue ornare dolor. Nam lacinia arcu quis congue pulvinar. Praesent tempor imperdiet tortor. Ut eu rutrum nibh. Phasellus suscipit eleifend ipsum.
        </Atom.Paragraph>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  </Atom.Container>
