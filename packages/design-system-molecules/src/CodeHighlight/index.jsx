import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { Box } from '@horizin/design-system-atoms'

export const CodeHighlight = ({ code, children }) =>
  <Highlight {...defaultProps} code={code || children} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Box sx={{p: 0}}>
        <pre className={className} style={{...style, borderRadius: 8, padding: 18}}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
      </Box>
    )}
  </Highlight>