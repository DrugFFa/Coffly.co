// components/OurStory.jsx
import React from 'react';

const OurStory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#5A3A36] mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Didirikan pada tahun 2018, Fore Coffee adalah startup kopi yang bercita-cita membuat kopi spesial terbaik untuk pelanggan.
            Seperti nama kami yang diambil dari kata “Forest” atau hutan, kami ingin tumbuh cepat, kuat, tinggi, dan menciptakan kehidupan di sekitar.
          </p>
          <p className="text-gray-700 mb-4">
            Kami menggunakan teknologi terkini untuk alat dan biji kopi kami, diambil langsung dari petani pilihan, diproses dengan sempurna oleh kami, dan disajikan oleh barista kompeten kami.
          </p>
          <button className="mt-6 px-6 py-2 bg-[#5A3A36] text-white rounded-md">
            Selengkapnya
          </button>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img src="/img/coffee/people.jpeg" alt="Our Story" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
