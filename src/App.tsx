import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import config from 'env'
import { Provider } from 'react-redux'
import { store } from './app/store/create-store.ts'
import { Web3ModalProvider } from './Web3ModalProvider.tsx'

const App = () => {
  console.log('Config set to: ' + config.env)

  return (
    <Web3ModalProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Web3ModalProvider>
  )
}

export default App
