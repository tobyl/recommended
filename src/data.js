export const vehicles = [
  {
    id: 1,
    title: <span><small>2018 HONDA</small><strong>RIDGELINE LX</strong></span>,
    value: true,
  },
  {
    id: 2,
    title: <span><small>2020 FORD</small><strong>FOCUS SE</strong></span>,
    value: true,
  },
  {
    id: 3,
    title: <span><small>2017 CHEVROLET</small><strong>COLORADO LT</strong></span>,
    value: false,
  },
  {
    id: 4,
    title: <span><small>2020 GMC</small><strong>ACADIA SLT</strong></span>,
    value: true,
  },
]

export const liabilityLimit = {
  title: 'Liability Limit',
  plain:
    'Provides protection against lawsuits resulting from an accident causing bodily injury, death, or property damage for up to $2,000,000.',
  help:
    'This protects you from lawsuits resulting from accidents causing bodily injury or death to others or property damage.',
  values: [
    {
      value: 1000000,
      display: <span>$1,000,000</span>,
      brief: '$1,000,000',
      level: 'neutral',
      plain: (
        <span>
          Provides protection against lawsuits resulting from an accident
          causing bodily injury, death, or property damage for up to 
          <strong>$1,000,000</strong>.
        </span>
      ),
    },
    {
      value: 2000000,
      display: <span>$2,000,000</span>,
      brief: '$2,000,000',
      level: 'highest',
      plain: (
        <span>
          Provides protection against lawsuits resulting from an accident
          causing bodily injury, death, or property damage for up to 
          <strong>$2,000,000</strong>.
        </span>
      ),
    },
  ],
}

export const comprehensiveDeductible = {
  title: 'Comprehensive Deductible',
  plain:
    'You would be responsible for the first $500 of damages to your vehicle for comprehensive coverage (fire, theft, vandalism, etc).',
  help:
    'Comprehensive coverage pays for damages to your vehicle not caused by a traffic accident (e.g. theft, fire, vandalism). As a vehicle gets older, its value goes down, and paying for comprehensive coverage on your car may no longer be worth it. Not purchasing comprehensive coverage may make sense if you are insuring a car that is not worth very much.',
  values: [
    {
      value: 0,
      display: <span>Not Included</span>,
      plain: (
        <span>
          You would be responsible for the <strong className="warning">full cost</strong> of any
          damages to your vehicle for comprehensive coverage (fire, theft,
          vandalism, etc).
        </span>
      ),
      brief: 'Not Included',
      level: 'lowest',
    },
    {
      value: 500,
      display: <span>$500 deductible</span>,
      plain: (
        <span>
          You would be responsible for the first <strong>$500</strong> of
          damages to your vehicle for comprehensive coverage (fire, theft,
          vandalism, etc).
        </span>
      ),
      brief: '$500 deductible',
      level: 'neutral',
    },
    {
      value: 1000,
      display: <span>$1,000 deductible</span>,
      plain: (
        <span>
          You would be responsible for the first <strong>$1,000</strong> of
          damages to your vehicle for comprehensive coverage (fire, theft,
          vandalism, etc).
        </span>
      ),
      brief: '$1,000 deductible',
      level: 'highest',
    },
  ],
}

export const collisionDeductible = {
  title: 'Collision Coverage',
  plain:
    'You would be responsible for the first $500 of damages to your vehicle for collision coverage (at fault accidents, single vehicle accidents, or hit and run).',
  help:
    'Collision coverage will repair your vehicle if you are involved in an at-fault accident, single vehicle accident, or hit and run. The deductible is the amount of money that you will pay out of your own pocket before the insurance company responds.',
  values: [
    {
      value: 0,
      display: <span>Not Included</span>,
      plain: (
        <span>
          You would be responsible for the{' '}
          <strong className="warning">full cost</strong> of any damages to your
          vehicle for comprehensive coverage (fire, theft, vandalism, etc).
        </span>
      ),
      brief: 'Not Included',
      level: 'lowest',
    },
    {
      value: 500,
      display: <span>$500 deductible</span>,
      plain: (
        <span>
          You would be responsible for the first <strong>$500</strong> of
          damages to your vehicle for comprehensive coverage (fire, theft,
          vandalism, etc).
        </span>
      ),
      brief: '$500 deductible',
      level: 'neutral',
    },
    {
      value: 1000,
      display: <span>$1,000 deductible</span>,
      plain: (
        <span>
          You would be responsible for the first <strong>$1,000</strong> of
          damages to your vehicle for comprehensive coverage (fire, theft,
          vandalism, etc).
        </span>
      ),
      brief: '$1,000 deductible',
      level: 'highest',
    },
  ],
}

export const transportationReplacement = {
  title: 'Transportation Replacement',
  plain:
    'Reimbursement for transportation costs if your vehicle is in the shop due to an insured claim.',
  help:
    'If your vehicle is in the shop due to an insured claim, you can be reimbursed up to your limit for a rental car, taxi cab, or whatever you need to get around.',
  values: [
    {
      value: 0,
      display: <span>Not Included</span>,
      plain: (
        <span>
          <strong>No coverage</strong> for transportation costs if your vehicle
          is in the shop due to an insured claim.
        </span>
      ),
      brief: 'Not Included',
    },
    {
      value: 1,
      display: <span>Included</span>,
      plain: (
        <span>
          <strong>Reimbursement</strong> for transportation costs if your vehicle
          is in the shop due to an insured claim.
        </span>
      ),
      brief: 'Included',
    },
  ],
}

export const nonOwnedAutos = {
  title: 'Damage to Non-owned Autos',
  plain: 'Your insurance coverage extends to cover a rental vehicle anywhere in Canada or the U.S.',
  help: 'If you happen to rent a vehicle anywhere in Canada or the U.S., you do not need to purchase coverage for that rental vehicle, this policy covers any damage up to your limit.',
  values: [
    {
      value: 0,
      display: <span>Not Included</span>,
      brief: 'Not Included',
    },
    {
      value: 1,
      display: <span>Included</span>,
      brief: 'Included',
    },
  ]
}

export const depreciationWaiver = {
  title: 'Waiver of Depreciation',
  plain: 'Ensures that in the event of a total loss of your vehicle, you will be reimbursed for the purchase price without any depreciation.',
  help: 'In case you ever get into an accident which causes the full loss of your vehicle within the first few months you own it, you will be reimbursed for the purchase price, not the depreciated value of the vehicle. This coverage is intended for vehicles purchased new within the last 2 years. Please note not all driving records qualify for this coverage.',
}

export const accidentWaiver = {
  title: 'Accident Waiver',
  plain: 'If you are involved in an at fault accident, your driving record will be remain the same and your premium won’t increase as a result of the accident.',
  help: null,
  values: [
    {
      value: 0,
      display: <span>Not Included</span>,
      plain: (
        <span>
          <strong>No coverage</strong> for transportation costs if your vehicle
          is in the shop due to an insured claim.
        </span>
      ),
      brief: 'Not Included',
    },
    {
      value: 1,
      display: <span>Included</span>,
      plain: (
        <span>
          <strong>Reimbursement</strong> for transportation costs if your vehicle
          is in the shop due to an insured claim.
        </span>
      ),
      brief: 'Included',
    },
  ],
}

export const convicitionProtector = {
  title: 'Conviction Protector',
  plain: 'In the event of your first Minor Conviction, this endorsement will prevent you from losing your Conviction Free discount.',
  help: null,
  values: [
    {
      value: 0,
      display: <span>Not Included</span>,
      brief: 'Not Included',
    },
    {
      value: 1,
      display: <span>Included</span>,
      brief: 'Included',
    },
  ]
}

export const incomeReplacement = {
  title: 'Income Replacement',
  plain: 'Replaces 70% of your gross weekly income up to $400 if you are unable to work due to an auto accident.',
  help: null,
  values: [
    {
      value: 400,
      display: <span><small>up to</small><strong>$400</strong><small>weekly</small></span>,
      brief: 'up to $400 weekly',
    },
    {
      value: 600,
      display: <span><small>up to</small><strong>$600</strong><small>weekly</small></span>,
      brief: 'up to $600 weekly',
    },
    {
      value: 800,
      display: <span><small>up to</small><strong>$800</strong><small>weekly</small></span>,
      brief: 'up to $800 weekly',
    },
    {
      value: 1000,
      display: <span><small>up to</small><strong>$1,000</strong><small>weekly</small></span>,
      brief: 'up to $1,000 weekly',
    },
  ]
}

export const medicalRehabNon = {
  title: <span>Medical, Rehabilitation and Attendant Care<br />(Non-Catastrophic Injury)</span>,
  plain: 'Reimbursement for medical and rehabilitation costs up to $1,000,000 that are not covered by OHIP if you suffer non-catastrophic injuries in an auto accident.',
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
      brief: '$1,000,000',
    },
  ]
}

export const medicalRehab = {
  title: <span>Medical, Rehabilitation and Attendant Care<br />(Catastrophic Injury)</span>,
  plain: 'Reimbursement for medical and rehabilitation costs up to $1,000,000 that are not covered by OHIP if you suffer catastrophic injuries in an auto accident.',
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
  plain: 'Reimbursement to hire someone to care for your dependents or take care of your household if you are injured in an auto accident.',
  help: 'Reimbursement to hire someone to care for your dependents or take care of your household if you are injured in an auto accident. Includes up to $250/week for your first dependent, $50/week for additional dependents, and up to $100 week for housekeeping.',
  values: [
    {
      value: 0,
      display: <span>Catastrophic Injuries Only</span>,
      brief: 'Catastrophic Injuries Only',
    },
    {
      value: 1,
      display: <span>Catastrophic & Non-Catastrophic Injuries</span>,
      brief: 'Catastrophic & Non-Catastrophic Injuries',
    },
  ]
}

export const deathFuneral = {
  title: 'Death & Funeral',
  plain: 'A lump sum payout to your family if you pass away in an auto accident, and a second payout to help cover cost of funeral expenses.',
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
  title: 'Dependent Care Benefit',
  plain: 'Reimbursement for additional expenses to care for your dependents if you’re employed and injured in an auto accident.',
  help: null,
  values: [
    {
      value: 0,
      display: <span>Standard Benefit</span>,
      brief: 'Standard Benefit',
    },
    {
      value: 1,
      display: <span>Increased Benefit</span>,
      brief: 'Increased Benefit',
    },
  ]
}

export const indexationBenefit = {
  title: 'Indexation Benefit',
  plain: 'Provides an annual adjustment for inflation for certain Accident Benefits.',
  help: 'Provides for an annual adjustment for inflation for certain accident benefits, determined according to the Consumer Price Index of Canada.',
  values: [
    {
      value: 0,
      display: <span>Not Included</span>,
      brief: 'Not Included',
    },
    {
      value: 1,
      display: <span>Included</span>,
      brief: 'Included',
    },
  ]
}
