import React, { useState, useEffect } from "react";
import { Link, Outlet, NavLink, useNavigate } from "react-router";
import { PiSidebarSimpleDuotone } from "react-icons/pi";
import logo from "../assets/logo.png";
import PawMartLogo from "../assets/PawMart-logo.png";
import { IoHomeOutline, IoLogOutOutline } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { TfiLayoutGrid2Thumb } from "react-icons/tfi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import {
  FaUser,
  FaUsers,
  FaChalkboard,
} from "react-icons/fa";
import demoUser from "../assets/user.png";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false)
  const { user, userSignOut } = useAuth();

  const handleLogout = () => {
    userSignOut()
    navigate("/");
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/users/profile?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
        console.log('dsaf', data)
      if(data?.role === "admin") {
        setIsAdmin(true)
      }else{
        setIsAdmin(false)
      }
    })
  }, [])

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <PiSidebarSimpleDuotone className="text-lg md:text-xl" />
          </label>

          <div className="w-full flex items-center justify-between">
            <div className="md:px-4 font-semibold">Dashboard</div>
          </div>
                  <div className="dropdown dropdown-end">
          <div tabIndex={0} className="rounded-full border border-primary cursor-pointer w-8 md:w-10 h-8 md:h-10 overflow-hidden">
           <img src={user?.photoURL || demoUser} alt="" className="w-full h-full"/>
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-44 border border-primary"
          >
            <li>
              <NavLink to="/dashboard/profile">
                <FaUser /> Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">
                <FaChalkboard /> Dashboard
              </NavLink>
            </li>
            <li className="text-error">
              <button onClick={handleLogout} data-tip="Logout">
                <IoLogOutOutline/> Logout
              </button>
            </li>
          </ul>
        </div>
        </nav>

        <div className="p-4">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div
          className="flex min-h-full flex-col items-start bg-gray-700
                     is-drawer-open:w-64
                     is-drawer-close:w-14
                     transition-all duration-300"
        >
          <Link to="/" className="py-2 text-xl font-bold flex gap-2">
            <img src={logo} alt="logo" className="is-drawer-open:hidden w-13 rounded-md" />
            <img src={PawMartLogo} alt="logo" className="is-drawer-close:hidden w-3/4 rounded-md" />
          </Link>

          <ul className="menu w-full grow flex flex-col gap-2 p-2">
            {isAdmin && (
              <>
              <li>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `flex items-center text-primary gap-2 p-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-base-300 text-base-content"
                  } is-drawer-close:tooltip is-drawer-close:tooltip-right`
                }
                data-tip="Dashboard"
              >
                <FaChalkboard className="text-lg" />
                <span className="is-drawer-close:hidden">Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/users"
                className={({ isActive }) =>
                  `flex items-center text-primary gap-2 p-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-base-300 text-base-content"
                  } is-drawer-close:tooltip is-drawer-close:tooltip-right`
                }
                data-tip="Users List"
              >
                <FaUsers className="text-lg" />
                <span className="is-drawer-close:hidden">Users List</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/pets&supplies"
                className={({ isActive }) =>
                  `flex items-center text-primary gap-2 p-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-base-300 text-base-content"
                  } is-drawer-close:tooltip is-drawer-close:tooltip-right`
                }
                data-tip="Pets & Supplies"
              >
                <MdOutlinePets className="text-lg" />
                <span className="is-drawer-close:hidden">Pets & Supplies</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/all-orders"
                className={({ isActive }) =>
                  `flex items-center text-primary gap-2 p-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-base-300 text-base-content"
                  } is-drawer-close:tooltip is-drawer-close:tooltip-right`
                }
                data-tip="All Orders"
              >
                <BsFillBoxSeamFill className="text-lg" />
                <span className="is-drawer-close:hidden">
                  All Orders
                </span>
              </NavLink>
            </li>
            </>
            )}

            {!isAdmin && (
                <>
                <li>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  `flex items-center text-primary gap-2 p-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-base-300 text-base-content"
                  } is-drawer-close:tooltip is-drawer-close:tooltip-right`
                }
                data-tip="Profile"
              >
                <FaUser className="text-lg" />
                <span className="is-drawer-close:hidden">Profile</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/my-posts"
                className={({ isActive }) =>
                  `flex items-center text-primary gap-2 p-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-base-300 text-base-content"
                  } is-drawer-close:tooltip is-drawer-close:tooltip-right`
                }
                data-tip="My Posts"
              >
                <TfiLayoutGrid2Thumb className="text-lg" />
                <span className="is-drawer-close:hidden">My Posts</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/my-orders"
                className={({ isActive }) =>
                  `flex items-center text-primary gap-2 p-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-base-300 text-base-content"
                  } is-drawer-close:tooltip is-drawer-close:tooltip-right`
                }
                data-tip="My Orders"
              >
                <BsFillBoxSeamFill className="text-lg" />
                <span className="is-drawer-close:hidden">
                  My Orders
                </span>
              </NavLink>
            </li>
            </>
            )}
{/* 

            <li>
              <NavLink
                to="/dashboard/payments"
                className={({ isActive }) =>
                  `flex items-center text-primary gap-2 p-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-base-300 text-base-content"
                  } is-drawer-close:tooltip is-drawer-close:tooltip-right`
                }
                data-tip="Payments"
              >
                <FaMoneyCheckDollar className="text-lg" />
                <span className="is-drawer-close:hidden">Payments</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/settings"
                className={({ isActive }) =>
                  `flex items-center text-primary gap-2 p-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-base-300 text-base-content"
                  } is-drawer-close:tooltip is-drawer-close:tooltip-right`
                }
                data-tip="Settings"
              >
                <FaCog className="text-lg" />
                <span className="is-drawer-close:hidden">Settings</span>
              </NavLink>
            </li> */}

            <div className="divider"></div>

            <li>
              <Link
                to="/"
                className="flex items-center text-white gap-2 p-2 rounded-lg hover:bg-base-300 hover:text-primary text-base-content is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Go Home"
              >
                <IoHomeOutline className="text-lg" />
                <span className="is-drawer-close:hidden">Go Home</span>
              </Link>
            </li>

            <li>
              <button
                onClick={handleLogout}
                className="flex items-center text-white gap-2 p-2 rounded-lg hover:bg-error hover:text-white text-base-content is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Logout"
              >
                <IoLogOutOutline className="text-lg" />
                <span className="is-drawer-close:hidden">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
