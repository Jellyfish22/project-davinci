import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const HomePage = lazy(() =>
  import('../../src/pages/Home').then((module) => ({
    default: module.Home,
  })),
)

const CollectorsProfilePage = lazy(() =>
  import('../../src/pages/CollectorsProfile').then((module) => ({
    default: module.CollectorsProfile,
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
        path: '/collector',
        element: <CollectorsProfilePage />,
      },
    ],
  },
])
