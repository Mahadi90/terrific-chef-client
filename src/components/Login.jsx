import React from "react";
import {  FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p>
                    <small>
                      Are you new here? please{" "}
                      <Link className="link text-blue-600" to="/register">
                        Register
                      </Link>
                    </small>
                  </p>
                </label>
              </div>
              <div className="form-control">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-center">or</p>
              <button className="border border-red-500 p-2 text-red-500 rounded-3xl hover:bg-red-500 transition duration-300 hover:text-white flex items-center justify-center">
                <FaGoogle className="me-2 w-6 h-6"/>
                Continue with google
              </button>
              <button className="border border-gray-700 p-2 rounded-3xl hover:bg-gray-700 transition duration-300 hover:text-white text-gray-700 flex items-center justify-center">
                <FaGithub className="me-2 w-6 h-6"/>
                Continue with github
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
