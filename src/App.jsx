import { useState } from 'react'
import HomePage from './Pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import './App.css'
import Score from './Pages/Score';
import Websc from './Pages/Websc';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <HomePage /> */}
      {/* <Score /> */}
      <Websc/>
    </div>
  )
}

export default App
