import React, { useEffect, useState } from 'react'
import Coverages from './Coverages'
import StickyHeader from './StickyHeader'
import StickyFooter from './StickyFooter'
import HomePrice from './HomePrice'
import { Star, Logo } from './icons'
import InovaLogo from './images/inova-logo.png'
import CostcoLogo from './images/costco-logo.png'

const initialValues = {
  liability_limit: 2000000,
  comprehensive_deductible: 1000,
  collision_deductible: 1000,
  transportation_replacement: 1,
  non_owned_autos: 1,
  depreciation_waiver: 0,
  accident_waiver_single: 1,
  accident_waiver: 1,
  conviction_protector: 0,
  income_replacement: 400,
  medical_rehab_non: 65000,
  medical_rehab: 2000000,
  caregiver_benefit: 0,
  death_funeral: 1,
  dependent_care: 0,
  indexation_benefit: 0,
}

export const AppContext = React.createContext()

const App = () => {

  const [openItem, setOpenItem] = useState('')

  // 'initial', 'initial-after-edit', 'customizing', 'customized', 'requoting', 'new-price'
  const [currentStatus, setCurrentStatus] = useState('initial')

  const [allExpanded, setAllExpanded] = useState(false)
  const [pricesChanged, setPricesChanged] = useState(false)

  const [values, setValues] = useState(initialValues)

  const highest = {
    liability_limit: 2000000,
    comprehensive_deductible: 1000,
    collision_deductible: 1000,
    transportation_replacement: 1,
    non_owned_autos: 1,
    conviction_protector: 1,
    income_replacement: 1,
    medical_rehab: 2000000,
  }

  const lowest = {
    comprehensive_deductible: 0,
    collision_deductible: 0,
  }

  const [depreciationWaiver, setDepreciationWaiver] = useState([
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: true },
    { id: 4, value: true },
  ])

  const [accidentWaiver, setAccidentWaiver] = useState([
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: true },
    { id: 4, value: true },
  ])

  const resetValues = () => {
    setValues(initialValues)
  }

  const itemChange = (name, value) => {
    setValues((prevState) => {
      const next = Object.assign({}, prevState)
      next[name] = Number(value)
      return next
    })

    const initial = initialValues[name]

    if (Number(value) !== initial) {
      // eslint-disable-line
      setCurrentStatus('customized')
    } else {
      setCurrentStatus('initial-after-edit')
    }
  }

  const handleReset = () => {
    resetValues()
    setOpenItem('')
    setCurrentStatus('initial')
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 350) {
        document.body.classList.add('scrolled-to')
      } else {
        document.body.classList.remove('scrolled-to')
      }
    })
  }, [])

  const show = currentStatus !== 'initial'

  return (
    <AppContext.Provider
      value={{
        values,
        setValues,
        depreciationWaiver,
        setDepreciationWaiver,
        accidentWaiver,
        setAccidentWaiver,
        pricesChanged,
        setPricesChanged,
        allExpanded,
        setAllExpanded,
        highest,
        lowest,
        resetValues,
        handleReset,
        currentStatus,
        setCurrentStatus,
        itemChange,
        openItem,
        setOpenItem,
      }}
    >
      <div className="App">
        <div className="Header">
          <img className="inova" src={InovaLogo} alt="Inova" />
          <img className="costco" src={CostcoLogo} alt="Costco" />
          <div className="CurrentNav"></div>
        </div>
        <HomePrice />
        <StickyFooter />
        <p className="lead Intro">
          Customize your coverage, look out for the{' '}
          <Logo className="InlineLogo" /> <strong>recommended coverage</strong>{' '}
          <Star className="InlineStar" /> as you make your choices!
        </p>
        <div className="clearfix">
          <div className="RightCol">
            <StickyHeader />
            {show && (
              <div className="CancelBtn">
                <hr />
                <button onClick={handleReset}>Cancel Changes</button>
              </div>
            )}
          </div>
          <div className="LeftCol">
            <Coverages />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
