// First, install the js-cookie library
// npm install js-cookie

// utils/cookies.js
import Cookies from 'js-cookie'

export const setCookie = (key, value, options = {}) => {
  Cookies.set(key, value, { ...options, secure: process.env.NODE_ENV !== 'development' })
}

export const getCookie = (key) => {
  return Cookies.get(key)
}

export const removeCookie = (key) => {
  Cookies.remove(key)
}

// pages/api/setCookie.js
import { serialize } from 'cookie'

export default function handler(req, res) {
  const { name, value } = req.body
  
  // Set the cookie
  res.setHeader('Set-Cookie', serialize(name, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    sameSite: 'strict',
    path: '/',
  }))

  res.status(200).json({ message: 'Cookie set successfully' })
}

// pages/api/getCookie.js
import { parse } from 'cookie'

export default function handler(req, res) {
  const cookies = parse(req.headers.cookie || '')
  res.status(200).json(cookies)
}

// Example usage in a component
import { useState, useEffect } from 'react'
import { setCookie, getCookie, removeCookie } from '../utils/cookies'

const CookieExample = () => {
  const [cookieValue, setCookieValue] = useState('')

  useEffect(() => {
    // Get cookie on component mount
    const storedValue = getCookie('exampleCookie')
    if (storedValue) {
      setCookieValue(storedValue)
    }
  }, [])

  const handleSetCookie = () => {
    setCookie('exampleCookie', 'Hello, Cookie!', { expires: 7 }) // Expires in 7 days
    setCookieValue('Hello, Cookie!')
  }

  const handleRemoveCookie = () => {
    removeCookie('exampleCookie')
    setCookieValue('')
  }

  return (
    <div>
      <p>Cookie Value: {cookieValue}</p>
      <button onClick={handleSetCookie}>Set Cookie</button>
      <button onClick={handleRemoveCookie}>Remove Cookie</button>
    </div>
  )
}

export default CookieExample