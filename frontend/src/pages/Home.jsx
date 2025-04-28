import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to MERN Authentication
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        A complete authentication system with user and admin roles built with
        the MERN stack.
      </p>

      {isAuthenticated ? (
        <div className="bg-white p-6 rounded-lg shadow-md inline-block">
          <p className="text-lg mb-4">
            You are logged in as{" "}
            <span className="font-semibold">{user?.name}</span> (
            <span className="capitalize">{user?.role}</span>)
          </p>
          <Link
            to={user?.role === "admin" ? "/admin/home" : "/user/home"}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
          >
            Go to Dashboard
          </Link>
        </div>
      ) : (
        <div className="space-x-4">
          <Link
            to="/login"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 bg-white text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 font-medium"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
