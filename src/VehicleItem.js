import React, { useState, useContext } from 'react'
import { vehicles } from './data'
import { AppContext } from './App'

import './VehicleItem.scss'

const Vehicle = ({ name, vehicle, kind }) => {

  const { depreciationWaiver, setDepreciationWaiver, accidentWaiver, setAccidentWaiver } = useContext(AppContext)

  let item = {}

  if (kind === 'depreciation') {
    item = depreciationWaiver.find((w) => w.id === vehicle.id)
  } else if (kind === 'accident') {
    item = accidentWaiver.find((w) => w.id === vehicle.id)
  }

  const handleChange = (value) => {
    if (kind === 'depreciation') {
      setDepreciationWaiver(prevState => {
        let next = [...prevState]
        let allExcept = next.filter(x => x.id !== vehicle.id)
        return [...allExcept, { id: vehicle.id, value }]
      })
    } else if (kind === 'accident') {
      setAccidentWaiver(prevState => {
        let next = [...prevState]
        let allExcept = next.filter(x => x.id !== vehicle.id)
        return [...allExcept, { id: vehicle.id, value }]
      })
    }
  }

  return (
    <div className="SingleVehicle clearfix">
      <div className="VehicleTitle">
        {vehicle.title}
      </div>
      <div className="Toggles">
        <label htmlFor={String(kind + vehicle.id)}>
          <input
            type="checkbox"
            name={String(kind + vehicle.id)}
            id={String(kind + vehicle.id)}
            checked={item.value}
            onChange={() => handleChange(kind, !item.value)}
          />
        </label>
      </div>
    </div>
  )
}

const VehicleItem = ({ name, item }) => {

  const [expanded, setExpanded] = useState(false)

  const { currentStatus } = useContext(AppContext)

  return (
    <div className={expanded ? 'Item VehicleItem Expanded' : 'Item VehicleItem'}>
      <h3 onClick={() => setExpanded(!expanded)}>{item.title}</h3>
      <div className={(currentStatus !== 'initial' || currentStatus === 'initial-after-edit') ? 'Hidden expanded' : 'Hidden'}>
      <p className="PlainEnglish">{item.plain}</p>
      </div>
      <div className="ToggleTitles clearfix">
        <span>Coverage Included</span>
      </div>
      {vehicles.map((v) => (
        <Vehicle key={v.id} vehicle={v} />
      ))}
    </div>
  )
}

export default VehicleItem
