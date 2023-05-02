import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";



const Login = () => {
  const { logIn, logInWithGoogle, logInWithGithub } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  //   console.log(location)
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email,password)

    setError("");
    setSuccess("");
    // for email-pass login
    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        setSuccess("Login successfull");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  //   for google login
  const handleLoginWithGoogle = () => {
    logInWithGoogle().then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   for github login
  const handleGitHubLogIn = () => {
    logInWithGithub().then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex justify-center my-2">
        <button
          onClick={handleLoginWithGoogle}
          className="border border-red-500 p-2 mx-2 text-red-500 rounded-3xl hover:bg-red-500 transition duration-300 hover:text-white flex items-center justify-center"
        >
          <FaGoogle className="me-2 w-6 h-6" />
          Continue with google
        </button>
        <button
          onClick={handleGitHubLogIn}
          className="border border-gray-700 p-2 rounded-3xl hover:bg-gray-700 transition duration-300 hover:text-white text-gray-700 flex items-center justify-center"
        >
          <FaGithub className="me-2 w-6 h-6" />
          Continue with github
        </button>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <form
            onSubmit={handleLogIn}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
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
              <p className="text-red-600">
                <small>{error}</small>
              </p>
              <p className="text-green-600">
                <small>{success}</small>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
