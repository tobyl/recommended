export const vehicles = [
  { id: 1, title: <span><small>2018 HONDA</small><strong>RIDGELINE LX</strong></span> },
  { id: 2, title: <span><small>2020 FORD</small><strong>FOCUS SE</strong></span> },
  { id: 3, title: <span><small>2017 CHEVROLET</small><strong>COLORADO LT</strong></span> },
  { id: 4, title: <span><small>2020 GMC</small><strong>ACADIA SLT</strong></span> },
]

export const liabilityLimit = {
  title: 'Liability Limit',
  plain: 'If you are in an accident, your damages and medical care are covered for up to $2,000,000',
  help: 'This protects you from lawsuits resulting from accidents causing bodily injury or death to others or property damage.',
  values: [
    {
      value: 1000000,
      display: <span>$1,000,000</span>,
      brief: '$1m',
      level: 'neutral',
    },
    {
      value: 2000000,
      display: <span>$2,000,000</span>,
      brief: '$2m',
      level: 'highest',
    },
  ]
}

export const comprehensiveDeductible = {
  title: 'Comprehensive Deductible',
  plain: 'A deductible of $500 for damages to your vehicle not caused by a traffic accident (e.g. theft, fire, vandalism).',
  help: 'This protects you from lawsuits resulting from accidents causing bodily injury or death to others or property damage.',
  values: [
    {
      value: 0,
      display: <span>No Coverage</span>,
      brief: 'None',
      level: 'lowest',
    },
    {
      value: 500,
      display: <span>$500</span>,
      brief: '$500',
      level: 'neutral',
    },
    {
      value: 1000,
      display: <span>$1,000</span>,
      brief: '$1,000',
      level: 'highest',
    },
  ]
}
export const collisionDeductible = {
  title: 'Collision Deductible',
  plain: 'A deductible of $500 for your vehicle in the event of an at-fault accident, single vehicle accident, or hit and run.',
  help: 'This protects you from lawsuits resulting from accidents causing bodily injury or death to others or property damage.',
  values: [
    {
      value: 0,
      display: <span>No Coverage</span>,
      brief: 'None',
      level: 'lowest',
    },
    {
      value: 500,
      display: <span>$500</span>,
      brief: '$500',
      level: 'neutral',
    },
    {
      value: 1000,
      display: <span>$1,000</span>,
      brief: '$1,000',
      level: 'highest',
    },
  ]
}

export const transportationReplacement = {
  title: 'Transportation Replacement',
  plain: 'You will be covered for a replacement vehicle if an insurance claim requires your vehicle to be out of service.',
  help: 'This protects you from lawsuits resulting from accidents causing bodily injury or death to others or property damage.',
  values: [
    {
      value: 0,
      display: <span>No Coverage</span>,
      brief: 'Not Covered',
    },
    {
      value: 1,
      display: <span>Covered</span>,
      brief: 'Covered',
    },
  ]
}

export const nonOwnedAutos = {
  title: 'Damage to Non-owned Autos',
  plain: 'true on any rental vehicle in the Canada or US.',
  help: 'This protects you from lawsuits resulting from accidents causing bodily injury or death to others or property damage.',
  values: [
    {
      value: 0,
      display: <span>No Coverage</span>,
      brief: 'Not Covered',
    },
    {
      value: 1,
      display: <span>Covered</span>,
      brief: '✔︎',
    },
  ]
}

export const depreciationWaiver = {
  title: 'Waiver of Depreciation',
  plain: 'Ensures that in the event of an accident, you will be reimbursed for the purchase price without any depreciation.',
  help: 'This protects you from lawsuits resulting from accidents causing bodily injury or death to others or property damage.',
}

export const accidentWaiver = {
  title: 'Accident Waiver',
  plain: 'If you are in an accident, your damages and medical care are covered for up to $2,000,000',
  help: 'This protects you from lawsuits resulting from accidents causing bodily injury or death to others or property damage.',
}

export const convicitionProtector = {
  title: 'Conviction Protector Endorsement',
  plain: 'In the event of your first Minor Conviction, this endorsement will prevent you from losing your Conviction Free discount.',
  help: 'This protects you from lawsuits resulting from accidents causing bodily injury or death to others or property damage.',
  values: [
    {
      value: 0,
      display: <span>No Coverage</span>,
      brief: 'Not Covered',
    },
    {
      value: 1,
      display: <span>Covered</span>,
      brief: '✔︎',
    },
  ]
}

export const incomeReplacement = {
  title: 'Income Replacement',
  plain: 'Income Replacement replaces up to 70 % of your gross income if you cannot work due to an auto accident.',
  help: null,
  values: [
    {
      value: 400,
      display: <span><small>up to</small><strong>$400</strong><small>weekly</small></span>,
      brief: '$400',
    },
    {
      value: 600,
      display: <span><small>up to</small><strong>$600</strong><small>weekly</small></span>,
      brief: '$600',
    },
    {
      value: 800,
      display: <span><small>up to</small><strong>$800</strong><small>weekly</small></span>,
      brief: '$800',
    },
    {
      value: 1000,
      display: <span><small>up to</small><strong>$1,000</strong><small>weekly</small></span>,
      brief: '$1,000',
    },
  ]
}

export const medicalRehabNon = {
  title: <span>Medical, Rehabilitation and Attendant Care<br />(Non-Catastrophic Injury)</span>,
  plain: 'Reimbursement for medical and rehabilitation costs that are not covered by OHIP. Attendant care is reimbursement for an attendant to care for you if you are unable.',
  help: null,
  values: [
    {
      value: 65000,
      display: <span><span>up to</span>$65,000</span>,
      brief: '$65,000',
    },
    {
      value: 130000,
      display: <span><span>up to</span>$130,000</span>,
      brief: '$130,000',
    },
    {
      value: 1000000,
      display: <span><span>up to</span>$1,000,000</span>,
      brief: '✔$1,000,000',
    },
  ]
}

export const medicalRehab = {
  title: <span>Medical, Rehabilitation and Attendant Care<br />(Catastrophic Injury)</span>,
  plain: 'Reimbursement for medical and rehabilitation costs that are not covered by OHIP. Attendant care is reimbursement for an attendant to care for you if you are unable.',
  help: null,
  values: [
    {
      value: 1000000,
      display: <span><span>up to</span>$1,000,000</span>,
      brief: '$1,000,000',
    },
    {
      value: 2000000,
      display: <span><span>up to</span>$2,000,000</span>,
      brief: '$2,000,000',
    },
  ]
}

export const caregiverBenefit = {
  title: <span>Caregiver Benefit & Housekeeping and<br />Home Maintenance Expenses</span>,
  plain: 'Reimbursement to hire someone to care for your dependents or take care of your household if you are injured in an auto accident. Standard coverage is for catastrophic injuries only.',
  help: 'Choose \'all injuries\' to extend coverage to non-catastrophic injuries.',
  values: [
    {
      value: 0,
      display: <span>No Coverage</span>,
      brief: 'No Coverage',
    },
    {
      value: 1,
      display: <span>Covered</span>,
      brief: 'Covered',
    },
  ]
}

export const deathFuneral = {
  title: 'Death & Funeral',
  plain: 'A lump sum payout to your spouse, each additional dependent if you pass away in an auto accident, and a second payout to help cover cost of funeral expenses.',
  help: null,
  values: [
    {
      value: 0,
      display: 'standard',
      brief: 'Standard',
    },
    {
      value: 1,
      display: 'increased',
      brief: 'Increased',
    },
  ]
}

export const dependentCare = {
  title: 'Dependent Care',
  plain: 'Reimbursement for additional expenses to care for your dependents if you’re employed and injured in an auto accident.',
  help: null,
  values: [
    {
      value: 0,
      display: <span>No Coverage</span>,
      brief: 'No Coverage',
    },
    {
      value: 1,
      display: <span>Covered</span>,
      brief: 'Covered',
    },
  ]
}

export const indexationBenefit = {
  title: 'Indexation Benefit',
  plain: 'Adjusts increased optional benefits for changes in inflation.',
  help: null,
  values: [
    {
      value: 0,
      display: <span>No Coverage</span>,
      brief: 'No Coverage',
    },
    {
      value: 1,
      display: <span>Covered</span>,
      brief: 'Covered',
    },
  ]
}
