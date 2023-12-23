import React, { useEffect, useRef } from 'react'
import './Card.scss'

export const Card = ({ className: additionalClassName, text, title, onClick }, index) => {
  let className = 'Card'
  if (additionalClassName) className += ` ${additionalClassName}`
  if (onClick) className += ' Clickable'

  // this makes each rendered card's animation a bit different.
  // you can get random values in css as well but that would only randomize the animation for all .Card elements
  // i wonder if there's a way to do this without js but thought of nothing so far
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
      <h4>{title || `proof #${index + 1}`}</h4>
      <span>{text}</span>
    </div>
  )
}