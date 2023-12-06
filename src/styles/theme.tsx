export default {
  grid: {
    container: '950px',
    gutter: '16px'
  },
  font: {
    family: "'Palanquin', 'Pano'",
    palanquine: "'Palanquin'",
    pano: "'Pano'",
    regular: 400,
    medium: 500,
    semiBold: 600,
    sizes: {
      xxsmall: '10px',
      xsmall: '12px',
      small: '14px',
      medium: '16px',
      large: '20px',
      xlarge: '24px',
      xxlarge: '32px',
      huge: '40px'
    }
  },
  colors: {
    black: '#000000',
    grey: '#555353',
    lightGrey: '#DFDFDF',
    lighBlue: '#4D6EDB',
    lightGreen: '#1C964D',
    white: '#FFFFFF',
    primary: '#ACFA2C'
  },
  spacings: {
    xxsmall: '4px',
    xsmall: '8px',
    small: '12px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
    xxlarge: '48px'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
