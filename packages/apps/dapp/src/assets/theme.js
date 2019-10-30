export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI', Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    blue: '#3a95ee',
    blueLight: '#466fec',
    blueRoyal: '#4481DC',
    cobalt: '#25294a',
    red: '#f4516c',
    rust: '#b34a4a',
    purple: '#716aca',
    turquoise: '#3ba0ac',
    orange: '#c67a18',
    smoke: '#f5f5f5',
  },
  gradient: {
    // Brand Gradient Styles
    primary: ['#2855de', '#466fec'],
    seconday: ['#2855de', '#466fec'],
    tertiary: ['#2855de', '#466fec'],

    // Generic Gradient Styles
    black: ['#232526', '#414345'],
    blueOcean: ['#56ccf2', '#3a95ee', '#2f80ed'],
    bluePurple: ['#2583b0', '#7324cc'],
    blueZodiac: ['#3f4257', '#333965'],
    blueDeep: ['#343b6b', '#262a46'],
    blue: ['#46a7ec', '#282ede'],
    blueDark: [' #4f5798', '#383f7d'],
    charcoal: ['#283048', '#859398'],
    green: ['#a1c900', '#00af4e'],
    gray: ['#f4f4f4', '#f2f2f2'],
    purple: ['#7d3eb4', '#e430ad'],
    purpink: ['#57489F', '#8e489f', '#433caf'],
    turquoise: ['#3ba0ac', '#3ba0ac'],
    orange: ['#ffa319', '#fb3306'],
    orangish: ['#ffb123', '#e9a100'],
    red: ['#ef473a', '#cb2d3e'],
    cloudy: ['#FFF', '#e7e3e3'],
    white: ['#FFF', '#fefefe'],
  },
  palette: {
    primary: {
      bg: 'primary',
      borderColor: 'primary',
      gradient: 'primary',
      color: 'white'
    },
    blue: {
      bg: 'blue',
      borderColor: 'blue',
      gradient: 'blue',
      color: 'white'
    },
    green: {
      bg: 'green',
      borderColor: 'green',
      gradient: 'green',
      color: 'white'
    },
  },

  // Core Styles
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      fontFamily: "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI', Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
      lineHeight: 'normal',
      fontWeight: 'normal',
      fontSize: 5,
    },
    h2: {
      fontFamily: "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI', Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
      lineHeight: 'normal',
      fontWeight: 'normal',
      fontSize: 4,
    },
    h3: {
      fontFamily: "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI', Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
      lineHeight: 'normal',
      fontWeight: 'normal',
      fontSize: 3,
    },
    h4: {
      fontFamily: "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI', Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
      lineHeight: 'normal',
      fontWeight: 'normal',
      fontSize: 2,
    },
    h5: {
      fontFamily: "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI', Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
      lineHeight: 'normal',
      fontWeight: 'normal',
      fontSize: 1,
    },
    h6: {
      fontFamily: "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI', Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
      lineHeight: 'normal',
      fontWeight: 'normal',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },


  // Extended Layout Styles
  fixed: {
    position: 'fixed',
    bottomRight: {
      bottom: 0,
      left: 0,
    },
    fill: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }
  },
  absolute: {
    position: 'absolute',
    fill: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }
  },
  layout: {
    header: {
      bg:'#FFF',
      boxShadow: 0,
      color: '#1e1e2d',
      // borderBottom: '2px solid #ececec',
      px: 4,
      py: 2,
      zIndex: 100,
    },
    fill: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }
  },
  shadows: {

    0: '0 1px 3px rgba(0,0,0,0.09), 0 1px 2px rgba(0,0,0,0.14)',
    1: '0 2px 4px rgba(0,0,0,0.04), 0 2px 3px rgba(0,0,0,0.10)',
    2: '0px -3px 6px rgba(139, 139, 136, 0.09), 0px 7px 8px rgba(131, 131, 131, 0.28)',
    3: '2px 6px 9px 0px rgba(174, 174, 174, 0.29), 0px 6px 10px 0px rgba(0,0,0,0.12)',
    4: '0 7px 14px 0 rgba(60,66,87, .12), 0 3px 6px 0 rgba(0,0,0, .12)',
    5: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    6: '0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.05)',
    7: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    8: '0px 2px 20px rgba(0, 0, 0, 0.13), 2px 2px 20px rgba(0, 0, 0, 0)',
    input: '0px 1px 5px rgba(0, 0, 0, 0.09)',
    cardHover: '0 3px 16px -6px #a09ccfa3',
    light: '1px 3px 4px 0px #afafc06e',
    lightHover: '0 3px 16px -4px #a09ccfa3',
    darkHover: '0 13px 21px -4px #a09ccf',
    sunset: '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #ca2ea5, 0px -4px 3px -2px #dc050f, -5px -4px 4px -6px #f3932f',
    blue: '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #066ebe, 0px -4px 3px -2px #2cc7b1, -5px -4px 4px -6px #46eca4',
    blueBottom: '0px 7px 5px -5px #066ebe, -1px 0px 10px 3px #46eca47d, -5px 4px 4px -8px #46eca4',
    blueSoft: '0px 7px 9px -7px #066ebe, -1px 0px 10px -3px #46eca47d, 1px 0px 15px -8px #46eca494',
    blueFaint: '0px 7px 9px -9px #066ebe4d, 0px 0px 10px -5px #46eca436, 1px 0px 15px -10px #46eca4c7',
    // Inset
    insetBottom: [
      'inset 0 -15px 15px -15px rgba(0,0,0,0.45)',
      'inset 0 -15px 15px -15px rgba(0,0,0,0.375)'
    ],
    insetBottomLight: [
      'inset 0 -10px 10px -10px rgba(0,0,0,0.19)',
      'inset 0 -10px 10px -10px rgba(0,0,0,0.23)'
    ],
    insetBottomHeavy: [
      'inset 0 -15px 15px -15px rgba(0,0,0,0.79)',
      'inset 0 -15px 15px -15px rgba(0,0,0,0.73)'
    ],
    insetTop: [
      'inset 0 15px 15px -15px rgba(0,0,0,0.45)',
      'inset 0 15px 15px -15px rgba(0,0,0,0.375)'
    ],
    insetTopLight: 'inset -3px 11px 6px -18px rgba(0,0,0,0.19), inset 0px 16px 8px -15px rgba(0,0,0,0.23)',
    insetTopHeavy: [
      'inset 0 15px 15px -15px rgba(0,0,0,0.79)',
      'inset 0 15px 15px -15px rgba(0,0,0,0.73)'
    ],

    rightLight: [
      '9px 0px 10px 0px rgba(0,0,0,0.19)',
    ],
    insetLeftLight: [
      'inset 10px 0px 15px 0px rgba(0, 0, 0, 0.25)',
    ],
    insetLeftHeavy: [
      'inset 10px 0px 15px 0px rgba(0, 0, 0, 0.55)',
    ],
  },
}

// example base theme from @theme-ui/presets
const heading = {
  fontFamily: "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI', Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
  lineHeight: 'normal',
  fontWeight: 'normal',
}