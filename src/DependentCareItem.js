import React, { useContext } from 'react'
import classNames from 'classnames'
// import Radio from './Radio'
import { AppContext } from './App'

import './Item.scss'

const DependentCareItem = ({ name, item, headers, children }) => {

  const { values, setValues, openItem, setOpenItem } = useContext(AppContext)
  const val = values[name]

  const handleChange = e => {
    setValues(prevState => {
      let next = Object.assign({}, prevState)
      next[name] = Number(e.target.value)
      return next
    })
  }

  const cls = classNames('Item', {
    Expanded: openItem === name,
    NotOpen: openItem !== '' && openItem !== name,
  })

  const handleClick = () => {
    openItem === name ? setOpenItem('') : setOpenItem(name)
  }

  return (
    <div className={cls}>
      <h3 onClick={handleClick}>
        <em>{item.title}</em>
        <div className="ItemValue">
          {val === 1 ? 'Benefit Included' : 'Not Included'}
        </div>
      </h3>
      <div className="Hidden">
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
              <td className="text-left">First dependent</td>
              <td>None</td>
              <td>$75 weekly</td>
            </tr>
            <tr>
              <td className="text-left">
                Each additional dependent to a maximum of $150 weekly
              </td>
              <td>None</td>
              <td>$25 weekly</td>
            </tr>
          </tbody>
        </table>
        <small className="HelpCopy">{item.help}</small>
      </div>
    </div>
  )
}

export default DependentCareItem
