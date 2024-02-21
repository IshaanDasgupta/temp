import { useState } from 'react'
import HomePage from './Pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Score from './Pages/Score';
import Websc from './Pages/Websc';
import Interview from './Pages/Interview';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <HomePage /> */}
      {/* <Score /> */}
      <Websc/>
      {/* <Interview /> */}
    </div>
  )
}

export default App
