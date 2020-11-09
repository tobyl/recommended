import React, { useContext } from 'react'
import Item from './Item'
import VehicleItem from './VehicleItem'
import DeathFuneralItem from './DeathFuneralItem'
import DependentCareItem from './DependentCareItem'
import { AppContext } from './App'
import {
  liabilityLimit,
  comprehensiveDeductible,
  collisionDeductible,
  transportationReplacement,
  nonOwnedAutos,
  depreciationWaiver,
  accidentWaiver,
  convicitionProtector,
  incomeReplacement,
  medicalRehabNon,
  medicalRehab,
  caregiverBenefit,
  deathFuneral,
  dependentCare,
  indexationBenefit,
} from './data'

const Coverages = ({ oabsExpanded, setOabsExpanded }) => {

  const { values } = useContext(AppContext)

  const hidden =
    values['comprehensive_deductible'] === Number(0) ||
    values['comprehensive_deductible'] === Number(0)

  return (
    <div className="Coverages">
      <Item name="liability_limit" item={liabilityLimit} />
      <Item name="collision_deductible" item={collisionDeductible} />
      <Item name="comprehensive_deductible" item={comprehensiveDeductible} />
      <Item
        name="transportation_replacement"
        item={transportationReplacement}
        optionsHidden={hidden}
      />
      <Item
        name="non_owned_autos"
        item={nonOwnedAutos}
        optionsHidden={hidden}
      />
      {!hidden && (
        <VehicleItem
          name="depreciation_waiver"
          kind="depreciation"
          item={depreciationWaiver}
        />
      )}
      <VehicleItem
        name="accident_waiver_single"
        kind="accident"
        item={accidentWaiver}
      />
      <VehicleItem
        name="accident_waiver"
        kind="accident"
        item={accidentWaiver}
        ShowVehicles
      />
      <Item name="conviction_protector" item={convicitionProtector} />
      {/* OABs */}
      <hr />
      <h2>Optional Accident Benefits</h2>
      <p className="lead" style={{ textAlign: 'left', fontSize: '1.15rem' }}>Included in your quote are the following additional benefits. You can customize your benefits further by customizing your coverage.</p>
      <p style={{ marginBottom: '2rem' }}>
        <button className="OabCustomize" onClick={() => setOabsExpanded(!oabsExpanded)}>{oabsExpanded ? 'Close All' : 'Customize'}</button>
      </p>
      <Item name="medical_rehab_non" item={medicalRehabNon} isOab />
      <Item name="medical_rehab" item={medicalRehab} isOab />
      <Item name="income_replacement" item={incomeReplacement} isOab />
      <Item
        name="caregiver_benefit"
        item={caregiverBenefit}
         isOab
      />
      <DeathFuneralItem
        name="death_funeral"
        item={deathFuneral}
        headers={['', 'standard', 'increased']}
        isOab
      />
      <DependentCareItem
        name="dependent_care"
        item={dependentCare}
        headers={['', 'standard', 'increased']}
        isOab
      />
      <Item name="indexation_benefit" item={indexationBenefit} isOab />
    </div>
  )
}

export default Coverages
