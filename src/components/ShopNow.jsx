import { FaPlus } from "react-icons/fa";
import pork3 from "../assets/Images/pork3.jpg";
import pork4 from "../assets/Images/pork4.jpg";
import pork5 from "../assets/Images/pork5.jpg";
import pork6 from "../assets/Images/pork6.jpg";

const ShopNow = () => {
  const products = [
    
    {
      id: 2,
      name: "Live Pork",
      price: "Ghc 40/kg",
      image: pork3,
    },
    {
      id: 3,
      name: "Dressed Pork(Bone-in)",
      price: "Ghc60/kg",
      image: pork4,
    },
    {
      id: 4,
      name: "Dressed Pork(Boneless)",
      price: "Ghc70/kg",
      image: pork5,
    },
    {
      id: 4,
      name: "Mixture of Pork",
      price: "Ghc100/kg",
      image: pork6,
    },
  ];

  return (
    <div className="w-full bg-[#f7f7f7] py-8">
      <h2 className="text-3xl font-extrabold text-center mb-8">Shop Now</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold text-[#3A703F]">
              {product.name}
            </h3>
            <p className="text-lg text-gray-700 my-4">{product.price}</p>
            <button className="bg-[#3A703F] text-white p-3 rounded-[7px] hover:bg-[#83CA13] transition-colors">
              <a
                href={`https://wa.me/+233551551878?text=${encodeURIComponent(
                  "Good day. I would like to buy some pork!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fa fa-whatsapp"
              >
                Order Now
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopNow;
