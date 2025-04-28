import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Check if user is authenticated on initial load
  useEffect(() => {
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      getUser();
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [token]);

  // Register user
  const register = async (formData) => {
    try {
      const res = await api.post("/auth/register", formData);
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
      setUser(res.data.data);
      navigate(res.data.data.role === "admin" ? "/admin/home" : "/user/home");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  // Login user
  const login = async (formData) => {
    try {
      const res = await api.post("/auth/login", formData);
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
      setUser(res.data.data);
      navigate(res.data.data.role === "admin" ? "/admin/home" : "/user/home");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  // Logout user
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    delete api.defaults.headers.common["Authorization"];
    navigate("/login");
  };

  // Get user data
  const getUser = async () => {
    try {
      const res = await api.get("/auth/me");
      setUser(res.data.data);
      setIsAuthenticated(true);
    } catch (err) {
      logout();
    } finally {
      setLoading(false);
    }
  };

  // Clear errors
  const clearErrors = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        loading,
        isAuthenticated,
        register,
        login,
        logout,
        clearErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
