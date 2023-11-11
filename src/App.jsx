import React, { useEffect, useState } from 'react'
import CarCalculator from './components/CarCalculator'

const App = () => {
  const [componentId, setComponentId] = useState('')

  useEffect(() => {
    const cId = document.getElementById('root').getAttribute('d-id')
    setComponentId(cId)
  }, [])

  if (componentId === 'car-calculator') return <CarCalculator />

  return null
}

export default App
