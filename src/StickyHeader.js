import React, { useContext } from 'react'
import { AppContext } from './App'

import './StickyHeader.scss'

const StickyHeader = () => {

  const { currentStatus, setCurrentStatus } = useContext(AppContext)

  const handleClick = () => {
    console.log('clicked')
    setCurrentStatus('requoting')
    setTimeout(() => {
      setCurrentStatus('new-price')
    }, 3000)
  }

  return (
    <div className="StickyHeader clearfix">
      {(currentStatus === 'customized' || currentStatus === 'requoting' || currentStatus === 'customizing') && (
        <div className="Requote">
          <p>
            You can{' '}
            <button onClick={handleClick}>
              requote{' '}
              {currentStatus === 'requoting' && (
                <span className="LoadingSpinner"></span>
              )}
            </button>{' '}
            to see updated pricing
          </p>
        </div>
      )}
      {(currentStatus === 'initial' ||
        currentStatus === 'initial-after-edit') && (
        <div>
          <div className="left">
            <span className="Dollar">$</span>
            <span className="Price">374</span>
            <span className="Per">PER MONTH</span>
          </div>
          <div className="right">
            <button className="Interested">I'm Interested</button>
          </div>
        </div>
      )}
      {currentStatus === 'new-price' && (
        <div>
          <div className="left">
            <span className="Dollar">$</span>
            <span className="Price">421</span>
            <span className="Per">PER MONTH</span>
          </div>
          <div className="right">
            <button className="Interested">I'm Interested</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default StickyHeader
