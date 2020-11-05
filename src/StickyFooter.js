import React, { useContext } from 'react'
import { AppContext } from './App'

import './StickyFooter.scss'

const StickyFooter = () => {

  const { resetValues, currentStatus, setCurrentStatus } = useContext(AppContext)

  const handleReset = () => {
    resetValues()
    setCurrentStatus('initial')
  }

  const show = currentStatus !== 'initial'

  return show ? (
    <div className="StickyFooter">
      <button onClick={handleReset}>Cancel Changes</button>
    </div>
  ) : null
}

export default StickyFooter
