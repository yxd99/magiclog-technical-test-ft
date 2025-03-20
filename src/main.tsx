import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Toaster } from './components/ui/sonner'
import { Header } from './components/header'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <App />
    <Toaster />
  </React.StrictMode>,
)

