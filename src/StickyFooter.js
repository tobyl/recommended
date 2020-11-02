import React, { useContext } from 'react'
import { AppContext } from './App'

import './StickyFooter.scss'

const StickyHeader = () => {

  const { resetValues, currentStatus, setCurrentStatus } = useContext(AppContext)

  const handleReset = () => {
    resetValues()
    setCurrentStatus('initial')
  }

  return (
    <div className="StickyFooter">
      <div>
        {currentStatus === 'initial' || currentStatus === 'new-price' ? (
          <button onClick={() => setCurrentStatus('customizing')}>
            Customize Coverage
          </button>
        ) : (
          <button onClick={handleReset}>Cancel Changes</button>
        )}
      </div>
    </div>
  )
}

export default StickyHeader
