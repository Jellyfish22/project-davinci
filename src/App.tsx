import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { Provider } from 'react-redux'
import { store } from './app/store/create-store.ts'

const App = () => {
  // console.log('Config set to: ' + config.env)

  return (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  )

}

export default App
