import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProSidebarProvider } from 'react-pro-sidebar'
import App from './App'
import './index.css'

import { BrowserRouter } from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProSidebarProvider>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </ProSidebarProvider>
  </React.StrictMode>,
)
