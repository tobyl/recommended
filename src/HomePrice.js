import React from 'react'

import './HomePrice.scss'

const HomePrice = () => {
  return (
    <div className="HomePrice">
      <div className="PriceCircle">
        <div className="Monthly">
          <span className="Dollar">$</span>
          <strong className="Value">421</strong>
          <span className="Per">
            PER
            <br />
            MONTH
          </span>
        </div>
        <div className="Yearly">
          <span className="Dollar">$</span>
          <strong className="Value">3742</strong>
          <span className="Per">
            PER
            <br />
            YEAR
          </span>
        </div>
      </div>
      <button>I'm Interested</button>
    </div>
  )
}

export default HomePrice