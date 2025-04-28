import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="max-w-md mx-auto text-center py-20">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
