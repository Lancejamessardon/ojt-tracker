import { Navigate, Route, Routes } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import OJTProfile from "./pages/OJTProfile";
import Attendance from "./pages/Attendance";
import DailyLog from "./pages/DailyLog";
import Tasks from "./pages/Tasks";
import Progress from "./pages/Progress";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" replace />}
      />

      <Route element={<DashboardLayout />}>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/ojt"
          element={<OJTProfile />}
        />

        <Route
          path="/attendance"
          element={<Attendance />}
        />

        <Route
          path="/daily-log"
          element={<DailyLog />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />

        <Route
          path="/progress"
          element={<Progress />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />
      </Route>
    </Routes>
  );
}

export default App;