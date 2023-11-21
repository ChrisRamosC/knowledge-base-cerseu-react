import React from 'react'
import ReactDOM from 'react-dom/client'
import { CerseuApp } from './CerseuApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <CerseuApp />
    </React.StrictMode>
  </BrowserRouter>,
)
