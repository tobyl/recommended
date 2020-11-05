import React, { useContext } from 'react'
import classNames from 'classnames'
// import Radio from './Radio'
import { AppContext } from './App'

import './Item.scss'

const DeathFuneralItem = ({ name, item, headers, children }) => {

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
        <span className="ExpandIcon">
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <path
              className="Circle"
              d="M500 250c0 68.345-28.511 132.063-73.223 176.777C382.063 471.489 318.345 500 250 500c-68.345 0-132.063-28.511-176.777-73.223C28.511 382.063 0 318.345 0 250c0-68.345 28.511-132.063 73.223-176.777C117.937 28.511 181.655 0 250 0c68.345 0 132.063 28.511 176.777 73.223C471.489 117.937 500 181.655 500 250zM413.179 86.821c-42.29-42.289-98.764-67.59-163.179-67.59S129.111 44.532 86.821 86.821c-42.289 42.29-67.59 98.764-67.59 163.179s25.301 120.889 67.59 163.179c42.29 42.289 98.764 67.59 163.179 67.59s120.889-25.301 163.179-67.59c42.289-42.29 67.59-98.764 67.59-163.179s-25.301-120.889-67.59-163.179z"
            />
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
    </div>
  )
}

export default DeathFuneralItem
