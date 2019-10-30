import React from "react"
import Markdown from 'markdown-to-jsx';

import { Heading, Paragraph } from '@horizin/design-system-atoms'
const ComponentOverrides = {
  p: {
      component: Paragraph,
      props: {
          as: 'p',
          className: 'p',
          serif: true
      },
  },
  h1: {
      component: Heading,
      props: {
          as: 'h1'
      },
  },
  h2: {
      component: Heading,
      props: {
          as: 'h2'
      },
  },
}

export default ({ sx, ...props }) => (
<Markdown
    sx={sx}
    options={{ overrides: ComponentOverrides}}
    {...props}
/>
)