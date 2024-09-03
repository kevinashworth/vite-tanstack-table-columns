export const spectrum = {
  gray: {
    DEFAULT: '#54565a',
    50: '#FAFAFA',
    100: '#EDEDED',
    200: '#CCCCCC',
    300: '#999999',
    400: '#7E7E7E',
    500: '#676767',
    600: '#5F5F5F',
    700: '#525252',
    800: '#4A4A4A',
    900: '#393939'
  },
  btc: '#f59e0b',
  vibrant: '#0047ba',
  // below here needed?
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: '#000',
  white: '#fff'
}

export type SpectrumColor = keyof typeof spectrum
