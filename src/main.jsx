import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { App } from './App.jsx'
import { About, AResponsivePage, AssortedProofs, ErrorPage } from './pages'

import './index.scss'

console.log('%cwelcome to my humble abode', 'color: #3498db; ')

const router = createBrowserRouter([{
  path: '',
  errorElement: <ErrorPage />,
  element: <Navigate to='proof-i-can-use-router/about' />
}, {
  path: 'proof-i-can-use-router',
  element: <App />,
  children: [{
    path: '',
    element: <div>hello sir</div>
  }, {
    path: 'assorted-proofs',
    element: <AssortedProofs />
  }, {
    path: 'about',
    element: <About />
  }, {
    path: 'a-responsive-page',
    element: <AResponsivePage />
  }]
}])

// const router = createBrowserRouter([{
//   path: '/',
//   element: <div>test</div>
// }, {
//   path: 'assorted-proofs',
//   element: <AssortedProofs />
// }, {
//   path: 'about',
//   element: <About />
// }, {
//   path: 'a-responsive-page',
//   element: <div>test responsive page</div>
// }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
