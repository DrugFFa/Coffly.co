// components/Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#5A3A36]">Testimoni</h2>
        <p className="text-yellow-600 mt-2">Kolaborasi Sukses Kami</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {/* Testimoni 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-sm text-gray-600 mb-4">
            “Kami sangat mengapresiasi inisiatif dari Coffly Co untuk berkolaborasi bersama dalam kampanye ini...”
          </p>
          <div className="mt-4 text-center">
            <img src="/img/ava/yinlin.jpg" alt="SOS" className="mx-auto h-10 mb-2" />
            <p className="font-semibold">Rahadian "Lord" Arifiyanto</p>
            <p className="text-xs text-gray-500">Yinlin's No.1 Simp</p>
          </div>
        </div>

        {/* Testimoni 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-sm text-gray-600 mb-4">
            ““Kami sangat mengapresiasi inisiatif dari Coffly Co untuk berkolaborasi bersama dalam kampanye ini...””
          </p>
          <div className="mt-4 text-center">
            <img src="/img/ava/encore.jpg" alt="Grab" className="mx-auto h-10 mb-2" />
            <p className="font-semibold">Ikbal Ghozali</p>
            <p className="text-xs text-gray-500">Raja Singa</p>
          </div>
        </div>

        {/* Testimoni 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-sm text-gray-600 mb-4">
            ““Kami sangat mengapresiasi inisiatif dari Coffly Co untuk berkolaborasi bersama dalam kampanye ini...””
          </p>
          <div className="mt-4 text-center">
            <img src="/img/ava/tri.jpg" alt="GoFood" className="mx-auto h-10 mb-2" />
            <p className="font-semibold">Bang Satyo Nugroho</p>
            <p className="text-xs text-gray-500">Terrorist Hunter</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
