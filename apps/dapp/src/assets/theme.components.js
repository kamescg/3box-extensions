import { relative } from "path";

export default { 

  buttons: {
    primary: {
      bg: 'primary',
      color: 'white',
      cursor: 'pointer',
      border: 0,
      padding: 2,
      borderRadius: 4,
      boxShadow: 0,
      my: 3,
      p: 3,
      position: 'relative',
      '&:hover': {
        boxShadow: 1,
        top: '-2px',
      },
      '&:active': {
        boxShadow: 0,
        top: '1px',
      }
    },
    disabled: {
      bg: 'muted',
      color: 'white',
    }
  },
  cards: {
    primary: {
      // bg: 'neutral', 
      border: '1px solid #e0e0e0',
      borderColor: 'borderShadow',
      boxShadow: 0,
      borderRadius: 4,
      color: 'text',
      my: 3,
      p: 3
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
    effects: {
      sm: {
        p: 2
      },
      lg: {
        p: 4
      },
      xl: {
        p: 5
      }
    }
  },
}