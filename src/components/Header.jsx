import React, { useContext, useState } from "react";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../providers/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [name, setName] = useState('')

  const handleDisplayName = () => {
    setName(user.displayName)
  }

  const handleLogOut = () => {
    logOut()
      .then(
        setName('')
      )
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100 border border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-3xl  font-bold">
          <span className="text-red-600">T</span>errific{" "}
          <span className="text-red-600">C</span>hef
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <ActiveLink className="mx-2" to="/">
            Home
          </ActiveLink>
          <ActiveLink className="mx-2" to="/blog">
            Blog
          </ActiveLink>
          <a className="mx-2">Contact</a>
        </ul>
      </div>
      <div className="navbar-end">
      <p className="me-4">{name ? name : ""}</p>
        {user ? (
          <>
          
            <div onMouseOver={handleDisplayName}>{user.photoURL ? <img className="w-8 h-8 me-4" src={user.photoURL} alt="" /> : <FaUserAlt className="w-6 h-6 me-4" />}</div>
            <button
              onClick={handleLogOut}
              className="text-white bg-red-500 py-1 px-2 rounded-md"
            >
              Log Out
            </button>
          </>
        ) : (
          <ActiveLink
            className="me-8 bg-red-500 py-1 px-3 rounded-md text-white"
            to="/login"
          >
            Login
          </ActiveLink>
        )}
      </div>
    </div>
  );
};

export default Header;
