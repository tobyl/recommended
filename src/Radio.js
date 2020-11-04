import React, { useContext } from 'react'
import classNames from 'classnames'
import { Star } from './icons'
import { AppContext } from './App'

const Radio = ({ name, index, item }) => {

  const { values, itemChange } = useContext(AppContext)

  const handleChange = e => {
    const val = e.target.value
    itemChange(name, val)
  }

  const isHighest = item.level === 'highest'

  const cls = classNames('Radio', {
    Highest: isHighest,
    Lowest: item.level === 'lowest',
    Neutral: item.level === 'neutral',
    Selected: item.value === values[name],
  })

  return (
    <label htmlFor={name + index} className={cls}>
      <input
        type="radio"
        id={name + index}
        value={item.value}
        onChange={handleChange}
        checked={item.value === values[name]}
      />{' '}
      {item.display}{isHighest && <Star />}
    </label>
  )
}

export default Radio
