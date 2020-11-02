import React, { useContext } from 'react'
// import Radio from './Radio'
import { AppContext } from './App'

import './Item.scss'

const DependentCareItem = ({ name, item, headers, children }) => {

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
            <td className="text-left">First dependent</td>
            <td>None</td>
            <td>up to $75 weekly</td>
          </tr>
          <tr>
            <td className="text-left">Each additional dependent to a maximum of $150 weekly</td>
            <td>None</td>
            <td>up to $25 weekly</td>
          </tr>
          <tr>
            <td className="text-left">Funeral expenses</td>
            <td><small>up to</small><br />$6,000</td>
            <td><small>up to</small><br />$8,000</td>
          </tr>
        </tbody>
      </table>
      <small className="HelpCopy">{item.help}</small>
    </div>
  )
}

export default DependentCareItem

// Reimbursement for additional expenses to care for your dependents if you’re employed and injured in an auto accident. Dependent Care is not included in Standard Coverage.If you chose to purchase this coverage, it includes up to $75 per week for your first dependent and $25 per week for additional dependents to a max of $150 a week.