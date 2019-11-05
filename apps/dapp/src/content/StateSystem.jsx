
import { Site } from 'templates'

const showcase = {
  title: 'State System.',
  tagline: 'Functional Effects to Simplify Everything.',
}

/* --- Content --- */
const featureOne = {
  title: 'Manage User Requests',
  tagline: 'Simplify request management from users.',
  summary: 'Proin commodo venenatis felis mollis porta. Phasellus pretium elit et neque gravida, eget malesuada dui placerat. Proin quis luctus libero.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673590.svg',

}
const featureTwo = {
  title: 'Global Application State',
  tagline: 'Access 3ID from Anywhere in the Application',
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

    {/* Features */}
    <Atom.Container my={5}>
      <Atom.Flex sx={{}}>
        <Molecule.Card
          {...featureOne}
          sx={{ flex: 1, p: 3 }}
          sxImage={{ maxWidth: 55, p: 2, pr: 3 }}
        />

        <Molecule.Card
          {...featureTwo}
          sx={{ flex: 1, p: 3 }}
          sxImage={{ maxWidth: 55, p: 2, pr: 3 }}
        />

        <Molecule.Card
          {...featureThree}
          sx={{ flex: 1, p: 3 }}
          sxImage={{ maxWidth: 55, p: 2, pr: 3 }}
        />
      </Atom.Flex>
    </Atom.Container>


    <Install3Box />


  </Site>

export default Home


const Install3Box = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'neutral', color: 'text', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{p: 4}}>
          <Atom.Heading md heavy m={0}>Install 3Box</Atom.Heading>
          <Atom.Paragraph m={0}>
            Include 3Box as project dependency.
      </Atom.Paragraph>
        </Atom.Flex>
        <Atom.Flex flex={3}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`
$ npm install 3box
$ yarn add 3box`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}
