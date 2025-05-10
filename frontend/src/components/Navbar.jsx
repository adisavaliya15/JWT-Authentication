import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-primary-600">
            MERN Auth
          </Link>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to={user?.role === "admin" ? "/admin/home" : "/user/home"}
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-primary-600"
                >
                  <HomeIcon className="h-5 w-5 mr-1" />
                  Dashboard
                </Link>
                <Link
                  to={
                    user?.role === "admin" ? "/admin/services" : "/user/profile"
                  }
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-primary-600"
                >
                  {user?.role === "admin" ? (
                    <Cog6ToothIcon className="h-5 w-5 mr-1" />
                  ) : (
                    <UserIcon className="h-5 w-5 mr-1" />
                  )}
                  {user?.role === "admin" ? "Services" : "Profile"}
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-primary-600"
                >
                  <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-primary-600"
                >
                  <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-1" />
                  Login
                </Link>
                <Link
                  to="/register"
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-primary-600"
                >
                  <UserIcon className="h-5 w-5 mr-1" />
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
