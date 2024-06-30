import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Container from "./Container";
import logo from "../assets/logo.png";
import AppSearchForm from "./AppSearchForm";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="text-white bg-primary">
        <Container className="p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between ">
              <Link to="/" className="flex items-center justify-center">
                <img
                  src={logo}
                  alt="logo"
                  className="h-8 border-black sm:h-10"
                />
              </Link>
            </div>
            <ul className="items-center hidden space-x-4 sm:flex sm:space-x-8">
              <li>
                <Link to={"/"} className="px-2 font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/"} className="px-2 font-semibold">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={"/"} className="px-2 font-semibold">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-3">
              <AppSearchForm />
              {false ? (
                <button
                  // onClick={handleLogout}
                  className="hidden text-lg font-semibold sm:flex"
                >
                  Log Out
                </button>
              ) : (
                <Link
                  to="/auth/signin"
                  className="hidden font-semibold text-md sm:flex"
                >
                  Login
                </Link>
              )}
              <button
                onClick={toggleSidebar}
                className={`"block text-white sm:hidden focus:outline-none" ${
                  isSidebarOpen ? "opacity-0" : ""
                }`}
              >
                <FaBars className="text-2xl" />
              </button>
            </div>
          </div>
        </Container>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 sm:hidden">
          <div className="fixed top-0 left-0 w-64 h-full p-5 bg-primary">
            <button
              onClick={toggleSidebar}
              className="mb-4 text-white focus:outline-none"
            >
              <FaBars className="text-2xl" />
            </button>
            <ul className="flex flex-col space-y-4 text-white">
              <li>
                <Link
                  to={"/"}
                  className="px-2 font-semibold"
                  onClick={toggleSidebar}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="px-2 font-semibold"
                  onClick={toggleSidebar}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="px-2 font-semibold"
                  onClick={toggleSidebar}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/auth/signin"
                  className="px-2 font-semibold"
                  onClick={toggleSidebar}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}