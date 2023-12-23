import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    if (countdown === 0) navigate('proof-i-can-use-router', { replace: true })
    setTimeout(() => setCountdown((c) => c - 1), 1000)
  }, [countdown])

  // ok so the weird condition there is because useeffect runs twice in dev mode on mount, so
  return (
    <div>
      hey you're not supposed to be here!
      {countdown < 4 && countdown}
    </div>
  )
}