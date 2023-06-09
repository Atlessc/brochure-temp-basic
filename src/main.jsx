import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Page2 from './components/Page2.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page3 from './components/Page3.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/Page2" element={<Page2/>} />
        <Route path="/Page3" element={<Page3/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
