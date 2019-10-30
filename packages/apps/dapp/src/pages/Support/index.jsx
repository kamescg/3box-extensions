
import { Site } from 'templates'

import { FormSupport } from 'forms'

/* --- Component --- */
const Support = props =>
<Site>
  <Atom.Container sx={{maxWidth: 700, py: 4}}>
    <Atom.Heading xl heavy>Support</Atom.Heading>
    <Atom.Paragraph sx={{fontSize: 0}}>
      Getting stuck somewhere? <strong>Let's figure it out together!</strong>
    </Atom.Paragraph>

    <Atom.Flex sx={{mt: 4}}>
      <Atom.Box sx={{flex: 5}}>
        <FormSupport />
      </Atom.Box>

      <Atom.Box sx={{flex: 2, p:3}}>
        
        <Atom.Paragraph>
          <strong>Email:</strong> {GLOBAL.contact.email}
        </Atom.Paragraph>
        <Atom.Paragraph>
          <strong>Twitter:</strong> {GLOBAL.contact.twitter}
        </Atom.Paragraph>
        <Atom.Paragraph>
          <strong>Chat:</strong> {GLOBAL.contact.chat}
        </Atom.Paragraph>
      </Atom.Box>
    </Atom.Flex>

    
  </Atom.Container>

</Site>

export default Support