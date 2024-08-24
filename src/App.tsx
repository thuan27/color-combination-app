import React from 'react'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import { store } from './redux/store'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
