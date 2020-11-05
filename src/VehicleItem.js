import React, { useContext } from 'react'
import classNames from 'classnames'
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

  const { currentStatus, openItem, setOpenItem } = useContext(AppContext)

  const handleClick = () => {
    openItem === name ? setOpenItem('') : setOpenItem(name)
  }

  const cls = classNames('Item VehicleItem', {
    Expanded: openItem === name,
    NotOpen: openItem !== name && openItem !== '',
  })

  return (
    <div className={cls}>
      <h3 onClick={handleClick}>
        <span className="ExpandIcon">
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <path className="Circle" d="M500 250c0 68.345-28.511 132.063-73.223 176.777C382.063 471.489 318.345 500 250 500c-68.345 0-132.063-28.511-176.777-73.223C28.511 382.063 0 318.345 0 250c0-68.345 28.511-132.063 73.223-176.777C117.937 28.511 181.655 0 250 0c68.345 0 132.063 28.511 176.777 73.223C471.489 117.937 500 181.655 500 250zM413.179 86.821c-42.29-42.289-98.764-67.59-163.179-67.59S129.111 44.532 86.821 86.821c-42.289 42.29-67.59 98.764-67.59 163.179s25.301 120.889 67.59 163.179c42.29 42.289 98.764 67.59 163.179 67.59s120.889-25.301 163.179-67.59c42.289-42.29 67.59-98.764 67.59-163.179s-25.301-120.889-67.59-163.179z" />
            <path
              className="Arrow"
              stroke="#000"
              fill="none"
              strokeWidth="20"
              d="M111.152 188.552l138.896 138.896 138.8-138.802"
            />
          </svg>
        </span>
        <em>{item.title}</em>
        <div className="ItemValue">
          {ShowVehicles ? 'Included for 3/4 Vehicles' : 'All Vehicles Included'}
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
