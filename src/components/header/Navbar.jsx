import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import "./navbar.css";
import logo from "../../assets/PawMart-logo.png";
import { AuthContext } from "../../context/AuthContext";
import PrimaryBtn from "../buttons/PrimaryBtn"
import OutlineBtn from "../buttons/OutlineBtn";
import ThemeToggle from "../theme/ToggleTheme";

const Navbar = () => {
  const navigate = useNavigate()
  const {user, setLoading, userSignOut} = use(AuthContext)
  const handleLogOut = ()=>{
    userSignOut()
        .then(()=> {
          console.log('Successfully Signed Out')
          setLoading(false)
          navigate('/login')
        })
        .catch(err => console.log(err))
  }

  const navItems = (
    <>
      <li key="1" className="font-semibold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li key="2" className="font-semibold">
        <NavLink to="/pets&supplies">Pets & Supplies</NavLink>
      </li>
      <li key="3" className="font-semibold">
        <NavLink to="/add-listing">Add Listing</NavLink>
      </li>
      <li key="4" className="font-semibold">
        <NavLink to="/my-list">My Listings</NavLink>
      </li>
      <li key="5" className="font-semibold">
        <NavLink to="/my-orders">My Orders</NavLink>
      </li>
    </>
  );
  const auth = (
    <>
      <OutlineBtn to={'/login'} value={'Login'}/>
      <PrimaryBtn to={'/register'} value={'Register'}/>
    </>
  );

  return (
    <div className=" shadow-md bg-base-300">
    <div className="max-w-[1200px] mx-auto navbar flex items-center">
      <div className="navbar-start">
        <div className="dropdown z-3 rounded-b-none">
          <div tabIndex={0} role="button" className="btn p-1 btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            id="nav"
            className="menu menu-lg dropdown-content bg-base-300 text-secondary rounded-box rounded-t-none z-20 mt-3 w-52 p-2 shadow"
          >
            {navItems}
            <div className="font-semibold pl-4 text-lg">Dark Mode <ThemeToggle/></div>
          </ul>
        </div>
        <Link to={'/'}><img src={logo} alt="logo" className="w-35 md:w-50 cursor-pointer"/></Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul id="nav" className="menu menu-horizontal text-base-secondary px-1 flex gap-4">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
        <div className="hidden md:block"><ThemeToggle/></div>
        {user ? (
          <div className="dropdown dropdown-end z-3">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt={user.displayName}
            src={user?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu z-3 menu-sm dropdown-content bg-white rounded-b-md mt-3 w-45 p-2 shadow">
        <li><Link to={'/profile'} className="text-center text-primary text-base md:text-xl mb-2">{user.displayName}</Link></li>
        <li>
          <button onClick={handleLogOut} className="btn btn-sm md:btn-md text-base font-semibold btn-warning px-6">
            Log out
          </button>
        </li>
      </ul>
    </div>
        ) : (auth)}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
