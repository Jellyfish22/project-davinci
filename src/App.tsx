import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import config from 'env'

const App = () => {
  console.log('Connfig set to: ' + config.env)

  return <RouterProvider router={router} />
}

export default App
