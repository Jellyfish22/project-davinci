import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const HomePage = lazy(() =>
  import('../../src/pages/Home').then((module) => ({
    default: module.Home,
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
    ],
  },
])
