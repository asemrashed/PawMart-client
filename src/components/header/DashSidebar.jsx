import { NavLink } from "react-router";

const menuMain = [
  { to: "/dashboard", icon: "dashboard", label: "Dashboard" },
  { to: "/users", icon: "group", label: "User Management" },
  { to: "/pets", icon: "pets", label: "Pet & Supplies Management" },
  { to: "/earnings", icon: "monetization_on", label: "Earnings" },
];

const menuPersonal = [
  { to: "/profile", icon: "account_circle", label: "Profile" },
  { to: "/listings", icon: "list_alt", label: "My Listings" },
  { to: "/orders", icon: "shopping_bag", label: "My Orders" },
];

export default function Sidebar({
  mobileOpen,
  onMobileClose,
  collapsed,
  onToggleCollapse,
}) {
  const width = collapsed ? "w-20" : "w-64";

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          onClick={onMobileClose}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed md:static z-50 md:z-auto
          top-16 left-0 h-[calc(100vh-4rem)]
          ${width}
          bg-secondary text-secondary-content
          transition-all duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Collapse button */}
        <div className="flex justify-center py-4 border-b border-secondary-content/20">
          <button
            onClick={onToggleCollapse}
            className="btn btn-ghost btn-sm"
          >
            <span className="material-symbols-outlined">
              {collapsed ? "chevron_right" : "chevron_left"}
            </span>
          </button>
        </div>

        <nav className="p-2 space-y-6">
          <MenuSection
            title="Main"
            items={menuMain}
            collapsed={collapsed}
          />

          <MenuSection
            title="Personal"
            items={menuPersonal}
            collapsed={collapsed}
          />
        </nav>

        <div className="p-4 mt-auto">
          {!collapsed && (
            <button className="btn btn-primary w-full">
              Upgrade to Pro
            </button>
          )}
        </div>
      </aside>
    </>
  );
}


function MenuSection({ title, items, collapsed }) {
  return (
    <div>
      {!collapsed && (
        <div className="px-3 mb-2 text-xs uppercase tracking-wide opacity-60">
          {title}
        </div>
      )}

      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.label} className="relative group">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `
                flex items-center gap-3 px-3 py-3 rounded-md
                hover:bg-secondary-content/10
                ${isActive ? "bg-secondary-content/20" : ""}
              `
              }
            >
              <span className="material-symbols-outlined text-xl">
                {item.icon}
              </span>

              {!collapsed && (
                <span className="text-sm font-medium">
                  {item.label}
                </span>
              )}
            </NavLink>

            {/* Tooltip (collapsed only) */}
            {collapsed && (
              <span
                className="
                  pointer-events-none absolute left-full top-1/2 -translate-y-1/2
                  ml-3 whitespace-nowrap rounded bg-base-200 px-3 py-1 text-xs
                  opacity-0 group-hover:opacity-100 transition
                  shadow-lg z-50
                "
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
