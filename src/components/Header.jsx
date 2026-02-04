import { NavLink } from "react-router-dom";
import { BarChart2 } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <BarChart2 className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-800">Soko<span className="text-green-600">Alerts</span></span>
          </NavLink>
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-lg font-medium transition-colors duration-200 ${isActive ? "text-green-600" : "text-gray-500 hover:text-green-600"}`
              }
            >
              Accueil
            </NavLink>
            <NavLink 
              to="/a-propos" 
              className={({ isActive }) => 
                `text-lg font-medium transition-colors duration-200 ${isActive ? "text-green-600" : "text-gray-500 hover:text-green-600"}`
              }
            >
              À Propos
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;