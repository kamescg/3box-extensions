
import { Site } from 'templates'

import { FormFeedback } from 'forms'

/* --- Component --- */
const Started = props =>
<Site>
  <Atom.Container sx={{maxWidth: 700, py: 4}}>
    <Atom.Heading xl heavy>Feedback</Atom.Heading>
    <Atom.Heading sm normal>How are we doing? What can we improve! <em>Your feedback is critical.</em></Atom.Heading>
    <Atom.Paragraph>
      We want to hear everything you have to say about our application. It's important to us we build an application that creates <strong>value for you.</strong> Without your feedback we'll get lost in the <em>feature scope abyss</em>
    </Atom.Paragraph>
    <FormFeedback />
  </Atom.Container>

</Site>

const cardData = {
title: 'Feedback',
tagline: "Tell Us What's Not Working",
imageCover: 'https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1232&q=80'
}


export default Started