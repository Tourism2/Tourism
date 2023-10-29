import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import {useNavigate} from "react-router-dom";// Import useHistory
import amman from "./amman.jpg";

const LogInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate(); // Initialize the history object

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here if needed

    axios
      .post("http://localhost:5000/login", formData)
      .then((response) => {
        console.log("Form data sent successfully:", response.data);
        // You can handle success or navigate to another page here
        history("/"); // Redirect to the home page ("/" in this example)
      })
      .catch((error) => {
        console.error("Error sending form data:", error);
        // Handle errors here
      });
  };
          // console.log(formData);
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div>
        <img src={amman} alt="Sign Up" className="mx-auto -z-10 mt-7" />
      </div>
      <div className="bg-white p-7 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-900 font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-900 font-semibold">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-2xl"
          >
            Log In
          </button>
        </form>
        <p className="flex justify-center mt-2 items-center">
          Don't have an account?{" "}
          <Link className="font-semibold" to="/signup">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInForm;