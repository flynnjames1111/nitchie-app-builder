'use client'

import { useState } from 'react'

const plans = [
  { name: 'Basic', price: 9.99, features: ['Create up to 3 apps', 'Basic support', 'Standard templates'] },
  { name: 'Pro', price: 19.99, features: ['Create unlimited apps', 'Priority support', 'Premium templates', 'Custom domains'] },
  { name: 'Enterprise', price: 49.99, features: ['Everything in Pro', 'Dedicated account manager', 'Custom feature development', 'SLA'] },
]

export default function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState('')

  const handleSubscribe = (planName: string) => {
    setSelectedPlan(planName)
    // Here you would typically integrate with a payment provider
    console.log(`Subscribing to ${planName} plan`)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">${plan.price}<span className="text-sm font-normal">/month</span></p>
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
                onClick={() => handleSubscribe(plan.name)}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                {selectedPlan === plan.name ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

