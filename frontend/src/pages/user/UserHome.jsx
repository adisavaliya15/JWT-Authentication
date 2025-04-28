import { useAuth } from "../../context/AuthContext";

const UserHome = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Welcome, {user?.name}!</h2>
        <p className="text-gray-600 mb-4">
          You are logged in as a{" "}
          <span className="font-medium">{user?.role}</span>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-primary-50 p-4 rounded-lg">
            <h3 className="font-medium text-primary-700 mb-2">
              Your Information
            </h3>
            <p className="text-gray-700">
              <span className="font-medium">Email:</span> {user?.email}
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-700 mb-2">Quick Actions</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/user/profile"
                  className="text-green-600 hover:underline"
                >
                  View Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
