
import fresh1 from "../assets/Images/fresh1.jpg";
import pork4 from "../assets/Images/pork4.jpg";
import pork5 from "../assets/Images/pork5.jpg";
import grilled3 from "../assets/Images/grilled3.jpg";
import grilled2 from "../assets/Images/grilled2.jpg"

const ShopNow = () => {
  const products = [
    {
      id: 2,
      category: "Fresh Pork",
      name: "Whole Pig",
      price: "Ghc 55/kg", // Wholesale price remains the same for Live Pork
      wholesaleInfo: "Wholesale: 50 kilos and above (Whole pig)",
      image: fresh1,
    },
    {
      id: 3,
      category: "Fresh Pork",
      name: "Pork Cuts (Bone-in)",
      price: "Ghc 70/kg", // Updated retail price
      retailInfo: "Retail: 1 kilo and above",
      image: pork4,
    },
    {
      id: 4,
      category: "Fresh Pork",
      name: "Pork Cuts (Boneless)",
      price: "Ghc 80/kg", // Updated retail price
      retailInfo: "Retail: 1 kilo and above",
      image: pork5,
    },
    {
      id: 5,
      category: "Grills",
      name: "Grilled Pork",
      price: "Ghc 150/kg",
      retailInfo: "Retail:10 kilos minimum",
      image: grilled3,
    },
    {
      id: 6,
      category: "Grills",
      name: "Grilled Pig (Whole)",
      price: "Ghc 120/kg",
      wholesaleInfo: "Wholesale:50 kilos and above",
      image: grilled2,
    },
  ];

  return (
    <div className="w-full bg-[#f7f7f7] py-8 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-extrabold text-center mt-8 mb-8">Shop Now</h2>

      {/* Fresh Pork Section */}
      <h3 className="text-2xl font-bold text-center mb-6">Fresh Pork</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:mr-[-30%] gap-8 mb-12 justify-center">
        {products
          .filter((product) => product.category === "Fresh Pork")
          .map((product) => (
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
              <p className="text-sm text-gray-600 mb-4">{product.retailInfo}</p>
              <p className="text-sm text-gray-600 mb-4">
                {product.wholesaleInfo}
              </p>
              <button className="bg-[#3A703F] text-white p-3 rounded-[7px] hover:bg-[#83CA13] transition-colors">
                <a
                  href={`https://wa.me/+233249277113?text=${encodeURIComponent(
                    "Welcome to Attohfield. We specialize in providing high-quality, fresh pork products to meet all your needs. What would you like to order today?"
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

      {/* Grilled Pork Section */}
      <h3 className="text-2xl font-bold text-center mb-6">Grills</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:mr-[-50%] justify-center">
        {products
          .filter((product) => product.category === "Grills")
          .map((product) => (
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
              <p className="text-sm text-gray-600 mb-4">{product.retailInfo}</p>
              <p className="text-sm text-gray-600 mb-4">
                {product.wholesaleInfo}
              </p>
              <button className="bg-[#3A703F] text-white p-3 rounded-[7px] hover:bg-[#83CA13] transition-colors">
                <a
                  href={`https://wa.me/+233249277113?text=${encodeURIComponent(
                    "Welcome to Attohfield. We specialize in providing high-quality, grilled pork products to meet all your needs. What would you like to order today?"
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

