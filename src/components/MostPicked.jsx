import React from "react";

const MostPicked = () => {
  const items = [
    { img: "coffee3.jpg", title: "Coffee Latte", price: "$3", discount: "15%" },
    { img: "coffee4.jpg", title: "Coffee Pitcher", price: "$30", discount: "5%" },
    { img: "coffee3.jpg", title: "Coffee Mug", price: "$2", discount: "10%" },
    { img: "coffee3.jpg", title: "Coffee Spoon", price: "$3", discount: "10%" },
    { img: "coffee3.jpg", title: "Coffee Beans", price: "$5", discount: "8%" },
    { img: "coffee3.jpg", title: "French Press", price: "$20", discount: "12%" },
  ];

   return (
    <div className="w-full px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Most Picked</h2>

      <div className="grid grid-cols-4 gap-6">
        {/* Gambar besar di kiri */}
        <div className="row-span-2 relative rounded-xl overflow-hidden h-[600px] shadow-md col-span-1">
          <img
            src="/img/coffee/coffee2.jpeg"
            alt="Coffee Brewer"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
            Discount 20%
          </div>
          <div className="absolute bottom-2 left-2 text-white">
            <h4 className="text-lg font-bold">Coffee Brewer</h4>
            <p className="text-sm">$250</p>
          </div>
        </div>

        {/* 6 gambar kecil kanan */}
        <div className="col-span-3 grid grid-cols-3 grid-rows-2 gap-4">
          {items.map((item, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden h-[290px] shadow-md">
              <img
                src={`/img/coffee/${item.img}`}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                Discount {item.discount}
              </div>
              <div className="absolute bottom-2 left-2 text-white">
                <h4 className="text-sm font-semibold">{item.title}</h4>
                <p className="text-xs">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPicked;
