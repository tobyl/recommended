import React, { useContext } from 'react'
import Item from './Item'
import VehicleItem from './VehicleItem'
import DeathFuneralItem from './DeathFuneralItem'
import CaregiverBenefitItem from './CaregiverBenefitItem'
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

const Coverages = () => {

  const { values } = useContext(AppContext)

  const hidden =
    values['comprehensive_deductible'] === Number(0) ||
    values['comprehensive_deductible'] === Number(0)

  return (
    <div className="Coverages">
      <Item name="liability_limit" item={liabilityLimit} />
      <Item name="comprehensive_deductible" item={comprehensiveDeductible} />
      <Item name="collision_deductible" item={collisionDeductible} />
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
        name="accident_waiver"
        kind="accident"
        item={accidentWaiver}
      />
      <Item name="conviction_protector" item={convicitionProtector} />
      {/* OABs */}
      <Item name="income_replacement" item={incomeReplacement} isOab />
      <Item name="medical_rehab_non" item={medicalRehabNon} isOab />
      <Item name="medical_rehab" item={medicalRehab} />
      <CaregiverBenefitItem
        name="caregiver_benefit"
        item={caregiverBenefit}
        headers={['', 'standard', 'increased']}
      />
      <DeathFuneralItem
        name="death_funeral"
        item={deathFuneral}
        headers={['', 'standard', 'increased']}
      />
      <DependentCareItem
        name="dependent_care"
        item={dependentCare}
        headers={['', 'standard', 'increased']}
      />
      <Item name="indexation_benefit" item={indexationBenefit} isOab />
    </div>
  )
}

export default Coverages
