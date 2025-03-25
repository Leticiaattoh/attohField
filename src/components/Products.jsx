import { FaLeaf, FaRecycle, FaPiggyBank, FaFeather } from "react-icons/fa";

const Products = () => {
  return (
    <div className="w-full p-8 bg-[#f7f7f7]">
      <h2 className="text-3xl font-extrabold text-center mb-8">
        Our Farm's Offerings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Eco-Energy Farming Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105">
          <FaLeaf className="text-5xl text-green-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-[#3A703F]">
            Eco-Energy Farming
          </h3>
          <p className="text-gray-700 mt-4">
            Harnessing renewable energy for sustainable farming. Eco-friendly
            systems to power our farm operations.
          </p>
        </div>

        {/* Biotech Storage Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105">
          <FaRecycle className="text-5xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-[#3A703F]">
            Biotech Storage
          </h3>
          <p className="text-gray-700 mt-4">
            Advanced storage solutions using biotechnology to preserve and
            improve quality.
          </p>
        </div>

        {/* Organic Investment Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105">
          <FaPiggyBank className="text-5xl text-yellow-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-[#3A703F]">
            Organic Investment
          </h3>
          <p className="text-gray-700 mt-4">
            Investing in organic practices to ensure long-term sustainability
            and quality for generations.
          </p>
        </div>

        {/* Quality Feed Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105">
          <FaFeather className="text-5xl text-orange-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-[#3A703F]">Quality Feed</h3>
          <p className="text-gray-700 mt-4">
            Providing the finest quality feed for healthy, thriving pigs.
            Nutritious and sustainable feed options.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
