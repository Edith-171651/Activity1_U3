import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import './App.css'
import Navbar from './componente/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const {t}=useTranslation();

  return (
    <div className="App">
      <Navbar/>
      <div>
        <div>
          
        </div>
        <div> 
          <h3 >{t("Tecnologias")}</h3>
          <img src='public\img.PNG'></img>
        </div>
      </div>
      
    </div>
  )
}

export default App
