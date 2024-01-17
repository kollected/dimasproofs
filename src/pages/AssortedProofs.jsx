import React, { useState } from 'react'
import { createPortal } from 'react-dom'

import { Card, Modal } from '../components'
import { debounce, memo } from '../utils.js'

import './AssortedProofs.scss'

const memoized = memo()

export const AssortedProofs = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const cards = [
    {
      text: 'proof i can debounce functions',
      onClick: debounce(() => console.log(`debounced function fired at ${new Date().toLocaleTimeString()}`))
    },
    {
      text: 'proof i know what memo is',
      onClick: () => {
        const valueOnClick = [5, 13, 11, 7][Math.floor(Math.random() * 4)]
        console.log('value on click:', valueOnClick, 'result:', memoized(valueOnClick))
      }
    },
    {
      text: 'proof i can show a modal',
      onClick: () => setModalOpen((c) => !c)
    },
    {
      text: 'proof i can fetch some data',
      onClick: async () => {
        console.log('%ctake a look at network too!', 'color: #2ecc71;')
        try {
          const response = await fetch('/api/hello')
          const { message } = await response.json()
          console.log(message)
        } catch (e) {
          console.error('please start the server with node src/server.cjs')
        }
      }
    },
    {
      text: 'proof i can make a rainbow border on a rounded div',
      className: 'RainbowBorder'
    },
    {
      text: 'proof i can do animations',
      className: 'RunningLine'
    },
    {
      text: 'proof i can use advanced css concepts & methods',
      // i just needed something to differentiate this card from others for my :where selector, hence the svg
      extraNode: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='16' height='16' fill='none'
             stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <path d='M20 6L9 17 4 12' />
        </svg>
      )
    }
  ]

  return (
    <>
      <h2>Assorted proofs</h2>
      <span>This page showcases a few common important skills that didn't make their way into other pages</span>
      <div className='Proofs'>
        {cards.map(Card)}
      </div>
      {isModalOpen && createPortal(
        <Modal closeModal={() => setModalOpen(false)} />,
        document.body
      )}
    </>
  )
}