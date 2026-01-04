import React, { use, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import "./navbar.css";
import logo from "../../assets/PawMart-logo.png";
import { AuthContext } from "../../context/AuthContext";
import PrimaryBtn from "../buttons/PrimaryBtn";
import OutlineBtn from "../buttons/OutlineBtn";
import ThemeToggle from "../theme/ToggleTheme";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setLoading, userSignOut } = use(AuthContext);
  const [showMenuBar, setShowMenuBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleLogOut = () => {
    userSignOut()
      .then(() => {
        setLoading(false);
        navigate("/login");
      })
      .catch(() => {});
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 20) {
        setShowMenuBar(false);
      } else {
        setShowMenuBar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const primaryNav = (
    <>
      <li className="font-semibold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/pets&supplies">Pets & Supplies</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="">
          More ⬇
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <NavLink to="/terms">Terms & Conditions</NavLink>
          </li>
          <li>
            <NavLink to="/privacy">Privacy Policy</NavLink>
          </li>
        </ul>
      </li>
    </>
  );

  const userNav = (
    <>
      <li className="font-semibold">
        <NavLink to="/add-listing">Add Listing</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/my-list">My Listings</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/my-orders">My Orders</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  const auth = (
    <>
      <OutlineBtn to="/login" value="Login" />
      <PrimaryBtn to="/register" value="Register" />
    </>
  );

  const userDropdown = (
    <div className="dropdown dropdown-end z-10">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img alt={user?.displayName} src={user?.photoURL} />
        </div>
      </div>
      <ul className="menu menu-sm dropdown-content bg-white rounded-b-md mt-3 w-48 p-2 shadow">
        <li>
          <Link
            to="/profile"
            className="text-center text-primary text-base md:text-xl mb-2"
          >
            {user?.displayName}
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogOut}
            className="btn btn-sm md:btn-md font-semibold btn-warning px-6"
          >
            Log out
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-300 shadow-md">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="dropdown md:hidden">
            <button tabIndex={0} className="btn btn-ghost p-1">
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
            </button>
            <ul className="menu dropdown-content mt-3 w-56 bg-base-300 shadow rounded-box">
              {primaryNav}
              <hr className="my-2" />
              {user && userNav}
              <div className="pl-4 flex items-center gap-2 font-semibold">
                Dark Mode <ThemeToggle />
              </div>
            </ul>
          </div>

          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="min-w-[130px] max-w-[150px]"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          {user ? userDropdown : auth}
        </div>
      </div>

      <div className="hidden md:block bg-base-200/40">
        <div className={`max-w-[1200px] mx-auto`}>
          <ul
            id="nav"
            className={`menu menu-horizontal gap-6 px-4 py-2 text-sm font-semibold`}
          >
            {primaryNav}
            <div className={`ml-auto flex gap-6`}>{user && userNav}</div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
