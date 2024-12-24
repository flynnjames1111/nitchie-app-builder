import React from 'react'

interface PricingPlansProps {
  onSelectPlan: (planName: string) => void;
}

const plans = [
  {
    name: 'Free',
    price: 0,
    features: [
      'Create up to 5 apps per month',
      'Basic templates',
      'Community support',
      'APK download',
      '100 monthly active users per app',
    ],
  },
  {
    name: 'Premium',
    price: 29.99,
    features: [
      'Create unlimited apps',
      'Premium templates',
      'Priority email support',
      'Direct publishing to Play Store and App Store',
      'Advanced customization options',
      '1,000 monthly active users per app',
      'Remove NitchieApps branding',
    ],
  },
  {
    name: 'Enterprise',
    price: 99.99,
    features: [
      'Everything in Premium',
      'Unlimited monthly active users',
      'Dedicated account manager',
      'Custom feature development',
      'SLA',
      'Advanced analytics',
      'White-label solution',
    ],
  },
]

export default function PricingPlans({ onSelectPlan }: PricingPlansProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">
                ${plan.price}
                <span className="text-sm font-normal">/month</span>
              </p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onSelectPlan(plan.name)}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

