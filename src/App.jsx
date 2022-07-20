import { useState } from 'react'

import './App.css'
import Navbar from './componente/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <div>Hola</div>
      
    </div>
  )
}

export default App
