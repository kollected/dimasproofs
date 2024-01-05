import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {
  const [countdown, setCountdown] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    if (countdown === 0) navigate('proof-i-can-use-router/about', { replace: true })
    setTimeout(() => setCountdown((c) => c - 1), 1000)
  }, [countdown])

  return (
    // a minor bonus of not using css modules i guess: don't have to import anything here
    <div className='PageContainer'>
      hey you're not supposed to be here! you'll be redirected shortly
    </div>
  )
}