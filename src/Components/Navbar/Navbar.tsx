import React from "react";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/useAuth";

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="hidden font-normal lg:flex">
            <Link to="/search" className="text-black ">
              Search
            </Link>
          </div>
        </div>
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="hover:text-darkBlue">Welcome, {user?.userName}</div>
            <a href="/"
              onClick={logout}
              className="px-5 py-2 font-bold rounded-lg text-white bg-purple-600 hover:opacity-85"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <Link to="/login" className="hover:text-darkBlue">
              Login
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 font-bold rounded-lg text-white bg-purple-600 hover:opacity-85"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
