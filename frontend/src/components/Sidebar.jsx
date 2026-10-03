import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="logo">
        <div className="logo-icon">
          O
        </div>

        <div className="logo-text">
          <h2>OJT Tracker</h2>
          <span>Internship System</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navigation">

        <p className="nav-title">
          MAIN MENU
        </p>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>⌂</span>
          Dashboard
        </NavLink>

        <NavLink
          to="/ojt"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>◉</span>
          My OJT
        </NavLink>

        <NavLink
          to="/attendance"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>◷</span>
          Attendance
        </NavLink>

        <NavLink
          to="/daily-log"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>▤</span>
          Daily Log
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>✓</span>
          Tasks
        </NavLink>

        <p className="nav-title">
          REPORTS
        </p>

        <NavLink
          to="/progress"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>▥</span>
          Progress
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>▧</span>
          Reports
        </NavLink>

        <p className="nav-title">
          SYSTEM
        </p>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>⚙</span>
          Settings
        </NavLink>

      </nav>

      {/* User */}
      <div className="sidebar-user">

        <div className="avatar">
          L
        </div>

        <div className="user-info">
          <strong>
            Lance James Sardon
          </strong>

          <span>
            OJT Student
          </span>
        </div>

        <button className="logout-btn">
          ⋮
        </button>

      </div>

    </aside>
  );
}

export default Sidebar; 