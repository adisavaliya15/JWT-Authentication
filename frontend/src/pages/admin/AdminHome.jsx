import { useAuth } from "../../context/AuthContext";

const AdminHome = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          Welcome, Admin {user?.name}!
        </h2>
        <p className="text-gray-600 mb-6">
          You have access to administrative features and can manage the
          application.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-medium text-blue-700 mb-2">Users</h3>
            <p className="text-2xl font-bold">24</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <h3 className="font-medium text-green-700 mb-2">Active</h3>
            <p className="text-2xl font-bold">18</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <h3 className="font-medium text-purple-700 mb-2">Admins</h3>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="font-medium text-lg mb-3">Quick Actions</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="/admin/services"
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
            >
              Manage Services
            </a>
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Add New User
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
