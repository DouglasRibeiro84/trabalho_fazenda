import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { GlobalCss, Container } from './styles'

import store from './store'
import Home from './pages/Home'
import Layout from './pages/Layout'
import PageCarrinho from './pages/PageCarrinho'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'carrinho',
        element: <PageCarrinho />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
