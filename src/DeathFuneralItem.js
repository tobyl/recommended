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
                Standard
                <br />
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
                Increased
                <br />
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
            <td className="text-left">For your spouse</td>
            <td>$25,000</td>
            <td>$50,000</td>
          </tr>
          <tr>
            <td className="text-left">For each dependent</td>
            <td>$10,000</td>
            <td>$20,000</td>
          </tr>
          <tr>
            <td className="text-left">Funeral expenses</td>
            <td>$6,000</td>
            <td>$8,000</td>
          </tr>
        </tbody>
      </table>
      <small className="HelpCopy">{item.help}</small>
    </div>
  )
}

export default DeathFuneralItem
