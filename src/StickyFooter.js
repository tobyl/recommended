import React, { useContext } from 'react'
import { AppContext } from './App'

import './StickyFooter.scss'

const StickyFooter = () => {

  const { currentStatus, handleReset } = useContext(AppContext)

  const show = currentStatus !== 'initial'

  return show ? (
    <div className="StickyFooter">
      <button onClick={handleReset}>Cancel Changes</button>
    </div>
  ) : null
}

export default StickyFooter
