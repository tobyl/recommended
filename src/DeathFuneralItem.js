import React, { useContext } from 'react'
import classNames from 'classnames'
// import Radio from './Radio'
import { AppContext } from './App'

import './Item.scss'

const DeathFuneralItem = ({ name, item, headers, children, isOab }) => {

  const { values, setValues, openItem, setOpenItem, oabsExpanded } = useContext(AppContext)
  const val = values[name]

  const handleChange = e => {
    setValues(prevState => {
      let next = Object.assign({}, prevState)
      next[name] = Number(e.target.value)
      return next
    })
  }

  const cls = classNames('Item', {
    Expanded: oabsExpanded,
    NotOpen: openItem !== '' && openItem !== name,
    OAB: isOab,
  })

  const handleClick = () => {
    openItem === name ? setOpenItem('') : setOpenItem(name)
  }

  return (
    <div className={cls}>
      <h3 onClick={handleClick}>
        <span className="ExpandIcon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.996 491.996"><path d="M484.132 124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86-7.208 0-13.964 2.792-19.036 7.86l-183.84 183.848L62.056 108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968 2.788-19.036 7.856l-16.12 16.128c-10.496 10.488-10.496 27.572 0 38.06l219.136 219.924c5.064 5.064 11.812 8.632 19.084 8.632h.084c7.212 0 13.96-3.572 19.024-8.632l218.932-219.328c5.072-5.064 7.856-12.016 7.864-19.224 0-7.212-2.792-14.068-7.864-19.128z"/></svg>
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
