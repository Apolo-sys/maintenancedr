import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://instagram.com/dressix.es" target="_blank">
          <img src="/logodr.png" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Coming soon...</h1>
    </div>
  )
}

export default App
