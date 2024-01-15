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
      text: 'proof i can fetch some data',
      onClick: () => {
        console.log('take a look at network too!')
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(json => console.log(json))
      }
    },
    {
      text: 'proof i can debounce functions',
      onClick: debounce(() => console.log(`debounced function fired at ${new Date().toLocaleTimeString()}`))
    },
    {
      text: 'proof i know what memo is',
      onClick: () => {
        const valueOnClick = [5, 13, 11, 7][Math.floor(Math.random() * 2)]
        console.log('value on click:', valueOnClick, 'result:', memoized(valueOnClick))
      }
    },
    {
      text: 'proof i can show a modal',
      onClick: () => setModalOpen((c) => !c)
    },
    {
      text: 'proof i can make a rainbow border on a rounded div',
      className: 'RainbowBorder'
    },
    {
      text: 'proof i  can do animations',
      className: 'RunningLine'
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