import { Routes, BrowserRouter, Route } from 'react-router-dom'

import LandingPageLayout from 'Layouts/LandingPageLayout'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import { IRoute, RouteTable } from './RouteTable'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {RouteTable.LandingPage.map((route: IRoute, key) => {
            return (
              <Route
                key={key}
                path={route.route}
                element={
                  route.noLayout ? (
                    route.component
                  ) : (
                    <LandingPageLayout>{route.component}</LandingPageLayout>
                  )
                }
              />
            )
          })}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
