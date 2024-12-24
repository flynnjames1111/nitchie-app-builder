import React from 'react'

interface HeroProps {
  onCreateAppClick: () => void
}

export default function Hero({ onCreateAppClick }: HeroProps) {
  return (
    <header className="pt-24 pb-16 gradient-bg text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Build Apps <br/>Without Writing Code
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Transform your ideas into fully functional mobile and web apps 
            in minutes, no programming skills required.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button 
              onClick={onCreateAppClick}
              className="bg-white text-green-500 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition"
            >
              Start Creating
            </button>
            <a href="#features" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-green-500 transition">
              Learn More
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img 
            src="/placeholder.svg?height=500&width=600"
            alt="App Creation Illustration" 
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </header>
  )
}

