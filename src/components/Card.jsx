import React, { useEffect, useRef } from 'react'

import './Card.scss'

export const Card = ({ className: additionalClassName, text, onClick }, index) => {
  let className = 'Card'
  if (additionalClassName) className += ` ${additionalClassName}`
  if (onClick) className += ' Clickable'

  // this makes each rendered card's animation a bit different.
  // you can get random values in css (specifically in sass) as well but that would only randomize the animation for all .Card elements
  const getRandomShake = () => Math.floor(Math.random() * 3) + 'px'
  const ref = useRef()

  useEffect(() => {
    ref.current.style.setProperty('--animation-time', Math.random() * 2 + 2 + 's')
    for (let i = 1; i < 7; i++) {
      ref.current.style.setProperty(
        `--shake-${i}`, `${i > 3 ? '-' : ''}` + getRandomShake()
      )
    }
  }, []);

  return (
    // usually wouldn't use index as key, but i don't intend to add any functionality that would change array element order
    <div className={className} onClick={onClick} key={index} ref={ref}>
      <h4>proof #{index + 1}</h4>
      <span>{text}</span>
    </div>
  )
}