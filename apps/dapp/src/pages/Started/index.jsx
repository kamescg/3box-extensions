
import { Site } from 'templates'
/* --- Component --- */
const Started = props =>
  <Site>

    {/* Hero */}
    <Molecule.Card
      layout='showcase'
      variants={['xlarge', 'centered']}
      variantsMain={['scopedLarge']}
      sx={{
        bg: 'blue', color: 'white', p: 6, py: 6
      }}
      sxTitle={{
        fontWeight: 700
      }}
      sxTagline={{
        fontWeight: 300
      }}
      {...cardData}
    />

    {/* Features */}
    <Atom.Container my={5}>
      <Atom.Flex sx={{}}>
        <Molecule.Card
          sx={{ flex: 1, p: 3 }}
          sxImage={{
            maxWidth: 45
          }}
          {...card1}
        />

        <Molecule.Card
          sx={{ flex: 1, p: 3 }}
          sxImage={{
            maxWidth: 45
          }}
          {...card2}
        />

        <Molecule.Card
          sx={{ flex: 1, p: 3 }}
          sxImage={{
            maxWidth: 45
          }}
          {...card3}
        />

      </Atom.Flex>
    </Atom.Container>


  </Site>

const cardData = {
  title: 'Getting Started',
  tagline: 'How To Use the Tools',
  imageCover: 'https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1232&q=80'
}

const card1 = {
  title: 'Build Faster',
  tagline: 'Create New Tools',
  summary: 'Proin commodo venenatis felis mollis porta. Phasellus pretium elit et neque gravida, eget malesuada dui placerat. Proin quis luctus libero.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673590.svg',

}
const card2 = {
  title: 'Move Quicker',
  tagline: 'Less Code in the Way',
  summary: 'Proin commodo venenatis felis mollis porta. Phasellus pretium elit et neque gravida, eget malesuada dui placerat. Proin quis luctus libero.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673612.svg',
}
const card3 = {
  title: 'Connect Data',
  tagline: 'Captivate Your Audience',
  summary: 'Proin commodo venenatis felis mollis porta. Phasellus pretium elit et neque gravida, eget malesuada dui placerat. Proin quis luctus libero.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673579.svg',
}

export default Started