import { createMuiTheme } from '@material-ui/core/styles'

import {
  InterThin,
  InterSemiBold,
  InterRegular,
  InterMedium,
  InterLight,
  InterExtraLight,
  InterExtraBold,
  InterBold,
  InterBlack
} from './fonts'

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'InterRegular, Arial'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          InterThin,
          InterSemiBold,
          InterRegular,
          InterMedium,
          InterLight,
          InterExtraLight,
          InterExtraBold,
          InterBold,
          InterBlack
        ]
      }
    }
  },
  palette: {
    primary: {
      main: '#474747'
    },
    secondary: {
      main: '#FF5C00'
    },
    tertiary: {
      main: '#000000'
    }
  }
})
