import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Detail Produk #{id}</h1>
      <p className="mt-2">Halaman detail produk akan ditampilkan di sini.</p>
    </div>
  );
};

export default DetailPage;
