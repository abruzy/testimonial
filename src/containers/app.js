import React, { Suspense } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../utils/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter } from 'react-router-dom'

import Loading from '../components/loading'
import Routes from './routes'

const NavbarLayout = React.lazy(() => import('../components/navbar'))
const Footer = React.lazy(() => import('../components/footer'))

function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <NavbarLayout />
          <Routes />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
