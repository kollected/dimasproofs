import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './components'

import './App.scss'

export const App = () => (
  <>
    <Header />
    <div className='PageContainer'>
      <Outlet />
    </div>
  </>
)