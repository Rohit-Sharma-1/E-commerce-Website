
const categories = [
  { name: "Jeans", imageUrl: "/jeans.jpg" },
  { name: "T-Shirts", imageUrl: "/tshirts.jpg" },
  { name: "Shoes", imageUrl: "/shoes.jpg" },
  { name: "Glasses", imageUrl: "/glasses.png" },
  { name: "Jackets", imageUrl: "/jackets.jpg" },
  { name: "Suits", imageUrl: "/suits.jpg" },
  { name: "Bags", imageUrl: "/bags.jpg" },
];

const demoProducts = [
  {
    _id: "1",
    name: "Classic Blue Jeans",
    price: 49,        
    image: "/jeans.jpg",
  },
  {
    _id: "2",
    name: "White T-Shirt",
    price: 19,
    image: "/tshirts.jpg",
  },
  {
    _id: "3",
    name: "Running Shoes",
    price: 79,
    image: "/shoes.jpg",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen text-white bg-black">
      
      {/* Hero Section */}
      <div className="text-center py-20 px-4">
        <h1 className="text-5xl sm:text-6xl font-bold text-emerald-400 mb-6">
          Eco Fashion Store
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover stylish, sustainable fashion made for modern living.
        </p>

        <button className="mt-8 bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-lg text-lg font-semibold">
          Shop Now
        </button>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-emerald-400">
          Explore Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryItem key={index} category={category} />
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-emerald-400">
          Featured Products
        </h2>

      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-400">
        © 2026 Eco Fashion. All rights reserved.
      </div>
    </div>
  );
};

export default HomePage;