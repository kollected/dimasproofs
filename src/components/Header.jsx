import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const navigation = [{
  title: 'About',
  to: 'about'
}, {
  title: 'A responsive page',
  to: 'a-responsive-page'
}, {
  title: 'Assorted proofs',
  to: 'assorted-proofs'
}]

export const Header = () => (
  <div className='Header'>
    {navigation.map(({ title, to }) => (
      <Link to={to} className='Tab'>
        {title}
      </Link>
    ))}
  </div>
)