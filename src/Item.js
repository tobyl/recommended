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

  return (
    <div className={cls}>
      <h3 onClick={() => setOpenItem(name)}>
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
