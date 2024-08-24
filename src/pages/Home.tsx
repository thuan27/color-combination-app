import React, { lazy, Suspense } from 'react'
import './style.scss'
import { Backdrop, CircularProgress } from '@mui/material'

const Combination = lazy(() => import('../components/Combination'))

const Home = () => {
  return (
    <div className="home">
      <Suspense
        fallback={
          <Backdrop sx={{ color: 'white', zIndex: 9999 }} open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      >
        <>
          <Combination />
        </>
      </Suspense>
    </div>
  )
}

export default Home
