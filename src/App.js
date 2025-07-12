import React from 'react';
import CoffeeCard from './components/CoffeeCard';
import MostPicked from './components/MostPicked';
import OurStory from './components/OurStory';
import Testimonies from './components/Testimonies';
import News from './components/News';

function App() {
  return (

    
    <div className="font-sans bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md px-12 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-brown-800 text-white rounded-full flex items-center justify-center font-bold text-lg">
            C
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Coffly <span className="text-brown-600">Co</span>
       </h1>
      </div>

  {/* Navigation */}
  <nav className="hidden md:flex items-center space-x-8 text-gray-700 text-sm font-medium">
    <a href="#" className="hover:text-brown-600 transition">Home</a>
    <a href="#" className="hover:text-brown-600 transition">Rate</a>
    <a href="#" className="hover:text-brown-600 transition">Contact</a>
    <a href="#" className="px-4 py-2 bg-brown-800 text-white rounded-md shadow hover:bg-brown-700 transition">
      Login
    </a>
  </nav>
</header>
      {/* Hero Section */}
      <section className="w-full px-12 py-20 relative bg-white">
        <div className="flex flex-col md:flex-row items-start gap-16 max-w-[1600px] mx-auto">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-6xl font-extrabold text-gray-900 leading-snug">
              Get Your Own Stuff<br />and Anything About Coffee Here!
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
              We empower coffee enthusiasts to effortlessly discover and own the products they’ve always dreamed of. Whether you're a casual coffee drinker or a passionate barista, we provide access to a curated selection of premium tools, accessories, and brews — all tailored to elevate your coffee experience. With just a few clicks, your coffee dreams become a reality — faster, easier, and more inspiring than ever before.
            </p>
            <button className="px-6 py-3 bg-brown-800 text-white rounded-lg text-base shadow hover:bg-brown-700 transition">
              Show Me Now
            </button>

            <div className="flex flex-wrap gap-6 pt-6 text-base">
              <div className="flex items-center space-x-2">
                <span role="img" aria-label="bean">☕</span>
                <span>Premium Coffee Beans</span>
              </div>
              <div className="flex items-center space-x-2">
                <span role="img" aria-label="product">🏢</span>
                <span>Premium Coffee Products</span>
              </div>
              <div className="flex items-center space-x-2">
                <span role="img" aria-label="utility">🛋️</span>
                <span>Premium Coffee Utilities</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 max-w-[700px] self-start mt-12 rounded-3xl overflow-hidden shadow-2xl h-[500px]">
            <img
              src="/img/coffee/coffee1.jpeg"
              alt="Coffee brewing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Wave Bawah Hero */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
          <svg viewBox="0 0 1440 320" className="w-full h-24">
            <path
              fill="#f7f7f7"
              fillOpacity="1"
              d="M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,53.3C672,43,768,53,864,85.3C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Product Section */}
      <br></br>
      
      <br></br>
      <MostPicked />

      {/* Wave Bawah MostPicked */}
      <div className="w-full overflow-hidden leading-none -mt-1 z-10">
        <svg viewBox="0 0 1440 320" className="w-full h-24">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,53.3C672,43,768,53,864,85.3C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Our Story Section */}
      <OurStory />

      {/* Wave Bawah Our Story */}
      <div className="w-full overflow-hidden leading-none -mt-1 rotate-180 z-10">
        <svg viewBox="0 0 1440 320" className="w-full h-24">
          <path
            fill="#f7f7f7"
            fillOpacity="1"
            d="M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,53.3C672,43,768,53,864,85.3C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Testimonials Section */}
      <Testimonies />

      {/* Coffee News Section */}
      <News />
      
      <footer className="bg-brown-800 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand & Tagline */}
          <div>
            <h2 className="text-3xl font-bold">Coffly <span className="text-gray-300">Co</span></h2>
            <p className="text-sm mt-4 text-gray-300">
              Brewing your dreams into a perfect cup. Explore our handpicked coffee essentials and gear.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:underline">Most Picked</a></li>
              <li><a href="#" className="hover:underline">Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Premium Beans</li>
              <li>Coffee Gear</li>
              <li>Custom Mugs</li>
              <li>Wholesale</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-300 mb-4">
              Get exclusive offers and updates in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md text-black w-full"
              />
              <button
                type="submit"
                className="bg-white text-brown-800 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-12 border-t border-gray-700 pt-6">
          &copy; {new Date().getFullYear()} Coffly Co. All rights reserved.
        </div>
    </footer>

    </div>
  );
}

export default App;
