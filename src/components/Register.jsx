import React from "react";
import { Link } from "react-router-dom";
import Image1 from '../assets/auth.png';
export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">

        <div className="w-1/2 bg-gray-200 flex justify-center items-center">

           <img src={Image1} alt="Register" className="object-cover h-full w-full" /> 
        </div>


        <div className="w-1/2 p-8">
          <p className="text-2xl text-green-400 text-center font-semibold mb-4">Register</p>
          <p className="text-xs text-center text-gray-600 mb-6">Create your account to start shopping</p>


          <label htmlFor="name" className="text-xs font-medium mb-1 block">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="name"
            id="name"
            name="name"
            className="border rounded p-2 w-full mb-4"
          />

          <label htmlFor="email" className="text-xs font-medium mb-1 block">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded p-2 w-full mb-4"
          />
          

          <label htmlFor="password" className="text-xs font-medium mb-1 block">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border rounded p-2 w-full mb-4"
          />


          <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 w-full mb-4">
            Register
          </button>

          <p className="text-sm text-center text-gray-600">
            Already have an account? <Link to="/login" className="text-green-500">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
