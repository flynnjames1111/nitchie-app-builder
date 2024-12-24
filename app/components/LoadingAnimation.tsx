import React from 'react'

export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-xl font-semibold">Creating your app...</p>
        <p className="text-gray-600 mt-2">This may take a few moments</p>
      </div>
    </div>
  )
}

