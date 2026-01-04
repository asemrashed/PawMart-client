import { Link, NavLink } from "react-router";

const SidebarItem = ({ to, icon, label, collapsed}) => (
  <li className="relative group">
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-secondary-content flex items-center gap-3 p-2 rounded-lg transition-colors
         ${isActive ? "bg-primary text-white" : "hover:bg-base-300"}`
      }
    >
      {icon}
      {!collapsed && label}
    </NavLink>

  </li>
);

const SidebarLink = ({ to, icon, label, collapsed}) => (
  <li className="relative group">
    <Link
      to={to}
      className="flex items-center bg-base-200 gap-3 p-2 rounded-lg hover:bg-base-300"
    >
      {icon}
      {!collapsed && label}
    </Link>
  </li>
);

export { SidebarItem, SidebarLink };
