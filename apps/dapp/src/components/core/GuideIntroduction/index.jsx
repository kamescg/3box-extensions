
/**
 * @name GuideIntroduction
 * @description Default Top GuideIntroduction region component.
 */

/* --- Global --- */
import { Link } from '@reach/router'


const cardData = {
  title: 'Explore the World',
  tagline: 'Captivate Your Audience With Knowledge',
  summary: 'Proin commodo venenatis felis mollis porta. Phasellus pretium elit et neque gravida, eget malesuada dui placerat. Proin quis luctus libero. Nulla in augue nec nibh condimentum tincidunt. Quisque eu lectus at sapien elementum vulputate.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673612.svg',
  imageCover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
}

const GuideIntroduction = props => {
  return (
    <Atom.Box sx={{ bg: 'white' }}>
      <Molecule.Card
        variantsCard={['showcase']}
        sx={{
          alignItems: 'center',
          maxWidth: 450
        }}
        variantsMain={['']}
        sxMain={{
          bg: 'white',
          p: 3
        }}
        variantsImage={['icon']}
        sxImageWrap={{ mt: -5, mb: 3 }}

        {...cardData}

      />
    </Atom.Box>
  )
}



export default GuideIntroduction