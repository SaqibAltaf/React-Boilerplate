import React, { ReactNode } from 'react'

import ExampleHomeStory from './components/ExampleHomeStory/index'

import { getPagePath } from './config'

export interface IRoute {
  route: string
  component: ReactNode
  noLayout: boolean
}
export const RouteTable = {
  LandingPage: [
    {
      route: getPagePath('/test-story'),
      component: (
        <React.Suspense fallback={'...loading'}>
          <ExampleHomeStory />
        </React.Suspense>
      ),
      noLayout: false
    }
  ]
}
