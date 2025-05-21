//import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { RouterProvider } from 'react-router-dom'
import router from './routes' // Ensure the path is correct

const App = () => {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <RouterProvider router={router} />
    </>
  )
}

export default App
