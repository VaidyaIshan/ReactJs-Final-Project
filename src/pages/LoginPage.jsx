import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className="w-200  mx-auto bg-white shadow-lg border border-gray-200 mt-10 rounded-xl p-6 ">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-600">Login</h1>

    

      <form onSubmit={handleSubmit} className="space-y-4">
    
        <div>
          <label className="block text-gray-700 font-bold mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg "
          />
        </div>

   
        <div>
          <label className="block text-gray-700 font-bold mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg "
          />
        </div>
        <button
          type="submit"
          className=" bg-green-600 text-white py-2 px-4 rounded-lg "
        >
          Login
        </button>
      </form>

      
    </div>
  );
}