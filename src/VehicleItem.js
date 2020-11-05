import React, { useState, useContext } from 'react'
import { vehicles } from './data'
import Radio from './Radio'
import { AppContext } from './App'

import './VehicleItem.scss'

const Vehicle = ({ name, vehicle, kind }) => {

  // const { depreciationWaiver, setDepreciationWaiver, accidentWaiver, setAccidentWaiver } = useContext(AppContext)

  // let item = {}

  // if (kind === 'depreciation') {
  //   item = depreciationWaiver.find((w) => w.id === vehicle.id)
  // } else if (kind === 'accident') {
  //   item = accidentWaiver.find((w) => w.id === vehicle.id)
  // }

  return (
    <div className="SingleVehicle clearfix">
      <div className="VehicleTitle">
        {vehicle.value ? <i>✔︎</i> : <em>Ineligible due to<br />driver history</em>}
        {vehicle.title}
      </div>
    </div>
  )
}

const VehicleItem = ({ name, item, ShowVehicles = false }) => {

  const [expanded, setExpanded] = useState(false)

  const { currentStatus } = useContext(AppContext)

  return (
    <div
      className={expanded ? 'Item VehicleItem Expanded' : 'Item VehicleItem'}
    >
      <h3 onClick={() => setExpanded(!expanded)}>
        <em>{item.title}</em>
        <div className="ItemValue">
          {ShowVehicles ? '3/4 Vehicles Covered' : 'All Vehicles Covered'}
        </div>
      </h3>
      <div
        className={
          currentStatus !== 'initial' || currentStatus === 'initial-after-edit'
            ? 'Hidden expanded'
            : 'Hidden'
        }
      >
        <p className="PlainEnglish">{item.plain}</p>
        {item.values && item.values.length > 0 && (
          <div className="Options">
            {item.values.map((o, i) => (
              <Radio key={i} index={i} name={name} item={o} isOab="false" />
            ))}
          </div>
        )}
        {ShowVehicles ? (
          <div className="VehicleList">
            {vehicles.map((v) => (
              <Vehicle key={v.id} vehicle={v} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default VehicleItem
