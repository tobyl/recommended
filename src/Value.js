import React, { useContext } from 'react'
import classNames from 'classnames'
import { Star, Warning } from './icons'
import { AppContext } from './App'

import './Value.scss'

const Value = ({ name, item, kind, isOab }) => {

  const { values, highest, lowest } = useContext(AppContext)

  const cls = classNames('ItemValue', {
    'Highest': highest[name] === values[name],
    'Lowest': lowest[name] === values[name],
    'OAB': isOab,
  })

  const selectedItem = item.values.find(x => {
    return x.value === values[name]
  })

  return (
    <div className={cls}>
      {selectedItem ? selectedItem.brief : 'uh oh'}
      <span>
        {highest[name] === values[name] && <Star />}
        {lowest[name] === values[name] && <Warning />}
      </span>
    </div>
  )
}

export default Value
