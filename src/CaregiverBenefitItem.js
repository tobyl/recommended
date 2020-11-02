import React, { useContext } from 'react'
// import Radio from './Radio'
import { AppContext } from './App'

import './Item.scss'

const DeathFuneralItem = ({ name, item, headers, children }) => {

  const { values, setValues } = useContext(AppContext)
  const val = values[name]

  const handleChange = e => {
    setValues(prevState => {
      let next = Object.assign({}, prevState)
      next[name] = Number(e.target.value)
      return next
    })
  }

  return (
    <div className="Item">
      <h3>{item.title}</h3>
      <p className="PlainEnglish">{item.plain}</p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>
              <label htmlFor={name + '0'}>
                Standard<br />
                <input
                  id={name + '0'}
                  type="radio"
                  value="0"
                  checked={val === 0}
                  onChange={handleChange}
                />
              </label>
            </th>
            <th>
              <label htmlFor={name + '0'}>
              Increased<br />
                <input
                  id={name + '1'}
                  type="radio"
                  value="1"
                  checked={val === 1}
                  onChange={handleChange}
                />
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left">First dependent up to $250 weekly</td>
            <td>Catastrophic injuries</td>
            <td>All injuries</td>
          </tr>
          <tr>
            <td className="text-left">Additional dependents up to $50 weekly</td>
            <td>Catastrophic injuries</td>
            <td>All injuries</td>
          </tr>
          <tr>
            <td className="text-left">Housekeeping up to $100 weekly</td>
            <td>Catastrophic injuries</td>
            <td>All injuries</td>
          </tr>
        </tbody>
      </table>
      <small className="HelpCopy">{item.help}</small>
    </div>
  )
}

export default DeathFuneralItem
