import React from 'react'

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-xl p-6">
            <p className="italic mb-4">"NitchieApps made my startup idea a reality without needing to learn complex programming."</p>
            <div className="flex items-center">
              <img src="/placeholder.svg?height=50&width=50" className="rounded-full mr-4" alt="User"/>
              <div>
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-sm text-gray-600">Startup Founder</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-6">
            <p className="italic mb-4">"As a teacher, I created an educational app for my students in just a few hours!"</p>
            <div className="flex items-center">
              <img src="/placeholder.svg?height=50&width=50" className="rounded-full mr-4" alt="User"/>
              <div>
                <h4 className="font-semibold">Mike Rodriguez</h4>
                <p className="text-sm text-gray-600">Educator</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-6">
            <p className="italic mb-4">"Never thought I could build an app. NitchieApps proved me wrong!"</p>
            <div className="flex items-center">
              <img src="/placeholder.svg?height=50&width=50" className="rounded-full mr-4" alt="User"/>
              <div>
                <h4 className="font-semibold">Emily Chen</h4>
                <p className="text-sm text-gray-600">Small Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

