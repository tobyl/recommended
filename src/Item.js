import React, { useContext } from 'react'
import classNames from 'classnames'
import Radio from './Radio'
import Value from './Value'
import { AppContext } from './App'

import './Item.scss'

const Item = ({ name, item, isOab, optionsHidden = false }) => {

  const { values, highest, lowest, openItem, setOpenItem } = useContext(AppContext)

  const cls = classNames('Item', {
    Expanded: openItem === name,
    NotOpen: openItem !== '' && openItem !== name,
    Highest: highest[name] === values[name],
    Lowest: lowest[name] === values[name],
    OAB: isOab,
  })

  const selected = item.values.find(x => x.value === values[name])

  let plain = ''

  if (selected.plain) {
    plain = selected.plain
  } else {
    plain = item.plain
  }

  const handleClick = () => {
    openItem === name ? setOpenItem('') : setOpenItem(name)
  }

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
        <Value name={name} item={item} isOab={isOab} />
      </h3>
      <div className="Hidden">
        <p className="PlainEnglish">{plain}</p>
        {optionsHidden ? null : (
          <div>
            {item.values.length > 0 && (
              <div className="Options">
                {item.values.map((o, i) => (
                  <Radio key={i} index={i} name={name} item={o} isOab={isOab} />
                ))}
              </div>
            )}
          </div>
        )}
        <small className="HelpCopy">{item.help}</small>
      </div>
    </div>
  )
}

export default Item
