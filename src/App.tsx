import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router } from './router/Router'
import { Route } from './router/Route'

function App() {
  return (
    <Router>
     <Route path="/">
        <div>home page</div>
     </Route>
     <Route path="/page1">
        <div>page1</div>
     </Route>
    </Router>
  )
}

export default App
