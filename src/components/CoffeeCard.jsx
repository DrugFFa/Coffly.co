const CoffeeCard = ({ product }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white w-full max-w-xs flex flex-col">
      {/* Gambar */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Badge Diskon */}
      <div className="absolute bg-red-500 text-white text-xs px-2 py-1 rounded-full mt-2 ml-2">
        {product.discount}
      </div>

      {/* Konten */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h4 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h4>
        <p className="text-gray-600 text-sm">{product.price}</p>
      </div>
    </div>
  );
};

export default CoffeeCard;
