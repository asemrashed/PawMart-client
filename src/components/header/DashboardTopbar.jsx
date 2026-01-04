import { NavLink, Link } from "react-router";
import logo from "../../assets/PawMart-logo.png";

export default function DashboardTopbar({ onMenuClick }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-base-300 flex items-center justify-between px-4 shadow">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="btn btn-ghost btn-sm text-primary-content md:hidden"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="min-w-[130px] max-w-[150px]"
            />
          </Link>
      </div>

      {/* Profile dropdown */}
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost gap-2">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYyuH0SUiwaiU1qJmK52g6xHhM5pXTU7ckaHX9V4KGPu9CuUPoOiewR0awANzR8ZZ0toRM2vF7QTrSuoYHm0O5otglfpWMDau-acLMmyvYK5oEemCRctWURohkxiO1OgJyLLNmusJ_s7JMBIZxJQooJVhrsSRUtt40_m0vXYrwUoCvlwRKZgssJRtazgvHkne-2kUHz16TgB4t1UVIVCFJ-idny6owaeqiJuN_420CC2KluQ12GYmoyKlrIziG3vhhoHN8WJPD3nc"
            className="w-9 h-9 rounded-full"
          />
          <span className="hidden sm:block text-primary-content">
            Steave
          </span>
        </label>

        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
        >
          <li>
            <NavLink to="/profile">
              <span className="material-symbols-outlined">person</span>
              Profile
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard">
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </NavLink>
          </li>

          <li className="text-error">
            <button>
              <span className="material-symbols-outlined">logout</span>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
