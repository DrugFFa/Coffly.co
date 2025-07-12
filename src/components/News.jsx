import React from 'react';

const News = () => {
  return (
    <section className="bg-[#ffffff] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Coffee News</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* News Card 1 */}
          <div className="bg-[#5A3A36] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
            <img src="/img/coffee/news1.jpeg" alt="News 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">How to Brew the Perfect Cup</h3>
              <p className="text-sm text-gray-200 mb-4">
                Discover the essential tools and techniques for mastering your home brew setup.
              </p>
              <a href="#" className="text-brown-300 hover:underline text-sm font-medium">Read more →</a>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="bg-[#5A3A36] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
            <img src="/img/coffee/news2.jpg" alt="News 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Top 5 Coffee Trends in 2025</h3>
              <p className="text-sm text-gray-200 mb-4">
                From nitro cold brew to AI-driven coffee makers — see what’s hot in the coffee world.
              </p>
              <a href="#" className="text-brown-300 hover:underline text-sm font-medium">Read more →</a>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="bg-[#5A3A36] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
            <img src="/img/coffee/news3.jpg" alt="News 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Coffly Co Launches New Products</h3>
              <p className="text-sm text-gray-200 mb-4">
                We’re proud to announce our latest premium products made for true coffee lovers.
              </p>
              <a href="#" className="text-brown-300 hover:underline text-sm font-medium">Read more →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
