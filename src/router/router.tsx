import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const HomePage = lazy(() =>
  import('../../src/pages/Home').then((module) => ({
    default: module.Home,
  })),
)

const WhitelistPage = lazy(() =>
  import('../../src/pages/Whitelist').then((module) => ({
    default: module.Whitelist,
  })),
)

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/gallery',
        element: <h1>Hello Gallery</h1>,
      },
      {
        path: '/whitelist',
        element: <WhitelistPage />,
      },
    ],
  },
])
