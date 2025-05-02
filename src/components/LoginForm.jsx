import React from "react";
import Image1 from '../assets/auth.png';
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Centered Box */}
      <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left - Image */}
        <div className="w-1/2 flex justify-center items-center bg-gray-200">
          <img src={Image1} alt="Auth" className="object-cover h-full w-full" />
        </div>

        {/* Right - Login Form */}
        <div className="w-1/2 p-8">
          <p className="text-2xl  text-green-400 text-center font-semibold mb-4">Sign In</p>
          <p className="text-sm text-center text-gray-600 mb-6">Sign in to continue shopping</p>

          <label htmlFor="email" className="text-sm font-medium flex sm:flex-row flex-col justify-between items-center mb-1">
            <span className="flex items-center text-xs">
              Email <span className="text-red-600 ml-1">*</span>
            </span>
            <span className="text-green-500 cursor-pointer mt-2 xs:mt-0">
              Use Phone Instead
            </span>
          </label>

          <input
            type="email"
            id="email"
            name="email"
            className="border  rounded p-2 w-full mb-4"
          />

          <label htmlFor="password" className="text-xs font-medium mb-1">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border rounded p-2 w-full mb-4"
          />

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                className="accent-green-600 mr-2"
              />
              <label htmlFor="agree" className="text-xs text-gray-700">Remember me</label>
            </div>

            <span className="text-sm text-blue-500 cursor-pointer">Forgot Password</span>
          </div>

          <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 w-full mb-4">
            Sign In
          </button>

          <p className="text-sm text-center">
  Don't have an account? <Link to="/register" className="text-green-500">Sign Up</Link>
</p>



<p className="text-md text-center">For quick demo login click below</p>

<div className="flex"></div>
<button className="bg-orange-500 text-white rounded-lg px-4 text-xs py-3 m-3.5 w-1/3">Admin</button>
<button className="bg-green-500 text-xs text-white rounded-lg px-4 py-3 m-3.5  w-1/3">Customer</button>
<button className="bg-blue-600  text-xs  text-white rounded-lg px-4 py-3 m-3.5  w-1/3">Manager</button>
<button className="bg-purple-500  text-xs text-white rounded-lg px-4 py-3 m-3.5  w-1/3">POS Operator</button>
<button className="bg-pink-500  text-xs text-white rounded-lg px-4 py-3 m-3.5  w-1/3">Delivery Boy</button>
        </div>
      </div>
    </div>
  );
}
