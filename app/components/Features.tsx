import React from 'react'

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose NitchieApps?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 feature-icon">
              <i className="fas fa-magic text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">No Coding Required</h3>
            <p className="text-gray-600">Create apps with simple drag-and-drop and intuitive interfaces.</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 feature-icon">
              <i className="fas fa-rocket text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Quick Deployment</h3>
            <p className="text-gray-600">Launch your app in minutes, not months.</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 feature-icon">
              <i className="fas fa-mobile-alt text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Multi-Platform</h3>
            <p className="text-gray-600">Create apps for web, iOS, and Android from a single platform.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

