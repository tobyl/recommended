import React, { useContext } from 'react'
import { vehicles } from './data'
import { AppContext } from './App'

import './VehicleItem.scss'

const Vehicle = ({ vehicle }) => {

  const { depreciationWaiver, setDepreciationWaiver, accidentWaiver, setAccidentWaiver } = useContext(AppContext)

  let depreciation = depreciationWaiver.find(w => w.id === vehicle.id)
  let accident = accidentWaiver.find(w => w.id === vehicle.id)

  const handleChange = (kind, value) => {
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
        <label htmlFor={'depreciation' + vehicle.id}>
          <input
            type="checkbox"
            name={'depreciation' + vehicle.id}
            id={'depreciation' + vehicle.id}
            checked={depreciation.value}
            onChange={() => handleChange('depreciation', !depreciation.value)}
          />
        </label>
        <label htmlFor={'accident' + vehicle.id}>
          <input
            type="checkbox"
            name={'accident' + vehicle.id}
            id={'accident' + vehicle.id}
            checked={accident.value}
            onChange={() => handleChange('accident', !accident.value)}
          />
        </label>
      </div>
    </div>
  )
}

const VehicleItem = ({ name, item }) => {

  const { currentStatus } = useContext(AppContext)

  return (
    <div className="Item VehicleItem">
      <div className={(currentStatus !== 'initial' || currentStatus === 'initial-after-edit') ? 'Hidden expanded' : 'Hidden'}>
        <p className="PlainEnglish">
        Accident and depreciation waivers are applicable for some vehicles
        depending upon age and driver history.
      </p>
      </div>
      <div className="ToggleTitles clearfix">
        <span>Waiver of Depreciation</span>
        <span>Accident Waiver</span>
      </div>
      {vehicles.map((v) => (
        <Vehicle key={v.id} vehicle={v} />
      ))}
    </div>
  )
}

export default VehicleItem
