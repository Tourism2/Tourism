import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import amman from "./amman.jpg";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here if needed

    axios
      .post("http://localhost:5000/registration", formData)
      .then((response) => {
        console.log("Form data sent successfully:", response.data);
        // You can handle success or navigate to another page here
      })
      .catch((error) => {
        console.error("Error sending form data:", error);
        // Handle errors here
      });
  };
                          console.log(formData);
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div>
        <img src={amman} alt="Sign Up" className="mx-auto -z-10" />
      </div>
      <div className="bg-white pb-7 pr-7 pl-7 pt-3 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-semibold text-center mb-3 text">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-gray-900 font-semibold">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
              placeholder="Enter your username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="mb-3">
            <label className="block text-gray-900 font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-2xl"
          >
            Sign Up
          </button>
        </form>
        <p className="flex justify-center mt-2 items-center">
          Already have an account?{" "}
          <Link className="font-semibold" to="/login">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;