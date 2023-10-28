import React from "react";
import amman from "./amman.jpg";
import { Link } from "react-router-dom";

const LogInForm = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-white ">
      <div className="">
        <img src={amman} alt="Sign Up" className=" mx-auto -z-10 mt-7 " />
      </div>
      <div className="bg-white p-7 rounded-lg shadow-xl w-96 ">
        <h2 className="text-2xl font-semibold text-center mb-4 text">Log In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-900 font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
              placeholder="Enter your email"
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
