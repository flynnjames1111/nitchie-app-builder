import React from 'react'

const faqs = [
  {
    question: "What is NitchieApps?",
    answer: "NitchieApps is a no-code platform that allows you to create mobile and web applications without writing any code. It's designed for entrepreneurs, small businesses, and individuals who want to bring their app ideas to life quickly and easily."
  },
  {
    question: "Do I need programming experience to use NitchieApps?",
    answer: "Not at all! NitchieApps is designed for users with no coding experience. Our intuitive drag-and-drop interface and pre-built templates make it easy for anyone to create functional and attractive apps."
  },
  {
    question: "What types of apps can I create with NitchieApps?",
    answer: "You can create a wide variety of apps including but not limited to: business apps, educational apps, fitness trackers, social networking apps, e-commerce apps, and more. If you can imagine it, you can likely build it with NitchieApps."
  },
  {
    question: "How long does it take to create an app?",
    answer: "The time it takes to create an app varies depending on its complexity and your familiarity with the platform. Simple apps can be created in a matter of hours, while more complex apps might take a few days or weeks. Our templates and intuitive interface significantly speed up the process compared to traditional app development."
  },
  {
    question: "Can I monetize my app created with NitchieApps?",
    answer: "You can monetize your app in various ways, such as in-app purchases, subscriptions, or advertising. The specific monetization options available may depend on your chosen plan."
  }
]

export default function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

