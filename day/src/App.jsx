import { useState } from 'react'

import './App.css'
import ParentComponants from './Componants/ParentComponants'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParentComponants/>
    </>
  )
}

export default App
