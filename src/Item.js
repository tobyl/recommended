import React, { useContext } from 'react'
import classNames from 'classnames'
import Radio from './Radio'
import Value from './Value'
import { AppContext } from './App'

import './Item.scss'

const Item = ({ name, item, isOab }) => {

  const { values, highest, lowest, currentStatus } = useContext(AppContext)

  const cls = classNames('Item', {
    Highest: highest[name] === values[name],
    Lowest: lowest[name] === values[name],
    OAB: isOab,
  })

  return (
    <div className={cls}>
      <h3>
        <Value name={name} item={item} isOab={isOab} />
        {item.title}
      </h3>
      <div className={(currentStatus !== 'initial' || currentStatus === 'initial-after-edit') ? 'Hidden expanded' : 'Hidden'}>
        <p className="PlainEnglish">{item.plain}</p>
        {item.values.length > 0 && (
          <div className="Options">
            {item.values.map((o, i) => (
              <Radio key={i} index={i} name={name} item={o} isOab={isOab} />
            ))}
          </div>
        )}
        <small className="HelpCopy">{item.help}</small>
      </div>
    </div>
  )
}

export default Item
