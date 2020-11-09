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
        {vehicle.value ? <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.701 45.7"><path d="M20.687 38.332a5.308 5.308 0 01-7.505 0L1.554 26.704A5.306 5.306 0 119.059 19.2l6.928 6.927a1.344 1.344 0 001.896 0L36.642 7.368a5.308 5.308 0 017.505 7.504l-23.46 23.46z"/></svg></i> : <em>Ineligible due to<br />driver history</em>}
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.996 491.996"><path d="M484.132 124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86-7.208 0-13.964 2.792-19.036 7.86l-183.84 183.848L62.056 108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968 2.788-19.036 7.856l-16.12 16.128c-10.496 10.488-10.496 27.572 0 38.06l219.136 219.924c5.064 5.064 11.812 8.632 19.084 8.632h.084c7.212 0 13.96-3.572 19.024-8.632l218.932-219.328c5.072-5.064 7.856-12.016 7.864-19.224 0-7.212-2.792-14.068-7.864-19.128z"/></svg>
        </span>
        <em>{item.title}</em>
        <div className="ItemValue">
          {ShowVehicles ? 'Included for 3 of 4 Vehicles' : 'All Vehicles Included'}
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
