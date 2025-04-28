import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Alert from "../../components/Alert";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, error, clearErrors } = useAuth();
  //eslint-disable-next-line
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    clearErrors();
    await login({ email, password });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

      {error && <Alert message={error} onClose={clearErrors} />}

      <form onSubmit={onSubmit}>
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={email}
          onChange={onChange}
          required
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={onChange}
          required
        />
        <div className="mb-4">
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
