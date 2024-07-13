import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import Container from "./Container";
import logo from "../assets/logo.png";
import AppSearchForm from "./AppSearchForm";
import { AuthContextType } from "@context/AuthProvider";
import { useAuth } from "@hooks/index";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const { authInfo, handleLogout } = useAuth() as AuthContextType;
  const { isLoggedIn, profile } = authInfo;
  const avatar = profile?.avatar;

  const handleOnSearchSubmit = (query: string) => {
    navigate("/blog/search?title=" + query);
  };

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
            <div className="w-1/2">
              <AppSearchForm onSubmit={handleOnSearchSubmit} />
            </div>
            <div className="flex items-center space-x-3">
              {isLoggedIn ? (
                <>
                  <Link
                    to={"/dashboard"}
                    className="w-8 h-8 p-0.5 border-2 border-white rounded-full cursor-pointer overflow-hidden"
                  >
                    <img src={avatar || logo} alt="Dashboard" />
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="hidden text-lg font-semibold sm:flex"
                  >
                    <IoLogOutOutline size={30} />
                  </button>
                </>
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
