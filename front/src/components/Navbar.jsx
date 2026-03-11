import { ShoppingCart, UserPlus, LogIn } from "lucide";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 border-b border-emerald-800">
      
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap justify-between items-center">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-emerald-400 flex items-center"
          >
            E-Commerce
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            
            <Link
              to="/"
              className="text-gray-300 hover:text-emerald-400 transition"
            >
              Home
            </Link>

            <Link
              to="/cart"
              className="flex items-center text-gray-300 hover:text-emerald-400 transition"
            >
              <ShoppingCart size={20} className="mr-1" />
              Cart
            </Link>

            <Link
              to="/signup"
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition"
            >
              <UserPlus size={18} className="mr-2" />
              Sign Up
            </Link>

            <Link
              to="/login"
              className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition"
            >
              <LogIn size={18} className="mr-2" />
              Login
            </Link>

          </nav>
        </div>
      </div>

    </header>
  );
};

export default Navbar;