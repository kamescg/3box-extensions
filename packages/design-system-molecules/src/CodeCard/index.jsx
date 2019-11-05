import React from "react";
import PropTypes from 'prop-types'
import { CodeHighlight } from '@horizin/design-system-molecules'
import { Container, Flex, Heading, Paragraph } from '@horizin/design-system-atoms'

export const CodeCard = ({children, ...props }) => {
  return (
    <Container my={3}>
      <Flex card alignCenter sx={{ bg: 'neutral', color: 'text', p: 3, flex: 1, borderRadius: 8 }}>

        <Flex column flex={2} sx={{flex: 3, p: 4}}>
          <Heading md heavy>
            {props.title}
          </Heading>
          <Paragraph>
            {props.summary}
          </Paragraph>
          {
            props.example
          }
        </Flex>

        <Flex column flex={2} sx={{flex: 3, p: 2}}>
          {
            props.code &&
            <CodeHighlight>
              {props.code || children}
            </CodeHighlight>
          }
        </Flex>
      </Flex>
    </Container>
  )
}

CodeCard.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
}