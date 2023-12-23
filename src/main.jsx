import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App.jsx'
import './index.scss'
import { About, AssortedProofs, ErrorPage } from './pages'

console.log('%c welcome to my humble abode', 'color: #3498db; ')

const router = createBrowserRouter([{
  path: '/proof-i-can-use-router',
  element: <App />,
  errorElement: <ErrorPage />,
  children: [{
    path: 'assorted-proofs',
    element: <AssortedProofs />
  }, {
    path: 'about',
    element: <About />
  }, {
    path: 'a-responsive-page',
    element: <div>this is going to be a responsive page</div>
  }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
