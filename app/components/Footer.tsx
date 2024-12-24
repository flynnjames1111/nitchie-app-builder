import React from 'react'

interface FooterProps {
  onCreateAppClick: () => void
}

export default function Footer({ onCreateAppClick }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Build Your App?</h3>
        <p className="text-xl mb-8">Start creating without writing a single line of code.</p>
        <button 
          onClick={onCreateAppClick}
          className="bg-green-500 text-white px-10 py-4 rounded-full text-lg hover:bg-green-600 transition"
        >
          Create Your App Now
        </button>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  )
}

