import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="flex h-screen items-center justify-center border shadow-md">
        <div id="my_modal_3" className="w-96 p-6 bg-white rounded-lg shadow-lg">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
          <h3 className="text-lg font-bold text-center">Signup</h3>
          <div className="mt-4 space-y-2">
            <label className="block font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
          </div>
          <div className="mt-4 space-y-2">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
          </div>
          <div className="mt-4 space-y-2">
            <label className="block font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
          </div>
          <div className="mt-4">
            <button className="w-full bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200">
              Signup
            </button>
          </div>
          <p className="text-center mt-3">
            Have an account?{" "}
            <Link to="/" className="underline text-blue-500">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
