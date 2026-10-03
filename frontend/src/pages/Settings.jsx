import { useState } from "react";

function Settings() {
  const [activeTab, setActiveTab] = useState("Profile");

  const [profile, setProfile] = useState({
    firstName: "Lance James",
    lastName: "Sardon",
    email: "lance@example.com",
    phone: "0912 345 6789",
    studentId: "2026-IT-001",
    program: "BS Information Technology",
    yearLevel: "4th Year",
  });

  const [notifications, setNotifications] = useState({
    attendance: true,
    tasks: true,
    dailyLogs: true,
    announcements: false,
    email: true,
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const [message, setMessage] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNotificationChange = (name) => {
    setNotifications((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;

    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveProfile = (e) => {
    e.preventDefault();

    setMessage("Profile settings saved successfully.");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const updatePassword = (e) => {
    e.preventDefault();

    if (
      !passwords.current ||
      !passwords.newPassword ||
      !passwords.confirm
    ) {
      setMessage("Please complete all password fields.");
      return;
    }

    if (passwords.newPassword !== passwords.confirm) {
      setMessage("New passwords do not match.");
      return;
    }

    setPasswords({
      current: "",
      newPassword: "",
      confirm: "",
    });

    setMessage("Password updated successfully.");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    setMessage(
      darkMode
        ? "Light mode enabled."
        : "Dark mode preference enabled."
    );

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <div className="settings-page">
      {/* Header */}
      <div className="page-header">
        <div>
          <div className="breadcrumb">
            OJT <span>/</span> Settings
          </div>

          <h1>Settings</h1>

          <p>
            Manage your account, preferences, and notifications.
          </p>
        </div>
      </div>

      {/* Success / Info Message */}
      {message && (
        <div className="settings-message">
          <span>✓</span>
          {message}
        </div>
      )}

      <div className="settings-layout">
        {/* Settings Sidebar */}
        <aside className="settings-sidebar">
          <button
            className={activeTab === "Profile" ? "active" : ""}
            onClick={() => setActiveTab("Profile")}
          >
            <span>👤</span>
            <div>
              <strong>Profile</strong>
              <small>Personal information</small>
            </div>
          </button>

          <button
            className={
              activeTab === "Notifications" ? "active" : ""
            }
            onClick={() => setActiveTab("Notifications")}
          >
            <span>🔔</span>
            <div>
              <strong>Notifications</strong>
              <small>Notification preferences</small>
            </div>
          </button>

          <button
            className={activeTab === "Appearance" ? "active" : ""}
            onClick={() => setActiveTab("Appearance")}
          >
            <span>🎨</span>
            <div>
              <strong>Appearance</strong>
              <small>Theme and display</small>
            </div>
          </button>

          <button
            className={
              activeTab === "Security" ? "active" : ""
            }
            onClick={() => setActiveTab("Security")}
          >
            <span>🔐</span>
            <div>
              <strong>Security</strong>
              <small>Password and account</small>
            </div>
          </button>
        </aside>

        {/* Settings Content */}
        <main className="settings-content">
          {/* Profile */}
          {activeTab === "Profile" && (
            <section className="settings-card">
              <div className="settings-card-header">
                <div>
                  <h2>Profile Information</h2>
                  <p>
                    Update your personal and academic information.
                  </p>
                </div>
              </div>

              <div className="settings-profile-header">
                <div className="large-avatar">
                  LJ
                </div>

                <div>
                  <h3>
                    {profile.firstName} {profile.lastName}
                  </h3>

                  <p>{profile.program}</p>

                  <button className="outline-button">
                    Change Photo
                  </button>
                </div>
              </div>

              <form onSubmit={saveProfile}>
                <div className="settings-form-grid">
                  <div className="settings-form-group">
                    <label>First Name</label>

                    <input
                      type="text"
                      name="firstName"
                      value={profile.firstName}
                      onChange={handleProfileChange}
                    />
                  </div>

                  <div className="settings-form-group">
                    <label>Last Name</label>

                    <input
                      type="text"
                      name="lastName"
                      value={profile.lastName}
                      onChange={handleProfileChange}
                    />
                  </div>

                  <div className="settings-form-group">
                    <label>Email Address</label>

                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                    />
                  </div>

                  <div className="settings-form-group">
                    <label>Phone Number</label>

                    <input
                      type="text"
                      name="phone"
                      value={profile.phone}
                      onChange={handleProfileChange}
                    />
                  </div>

                  <div className="settings-form-group">
                    <label>Student ID</label>

                    <input
                      type="text"
                      name="studentId"
                      value={profile.studentId}
                      onChange={handleProfileChange}
                    />
                  </div>

                  <div className="settings-form-group">
                    <label>Year Level</label>

                    <select
                      name="yearLevel"
                      value={profile.yearLevel}
                      onChange={handleProfileChange}
                    >
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                    </select>
                  </div>

                  <div className="settings-form-group full">
                    <label>Program</label>

                    <input
                      type="text"
                      name="program"
                      value={profile.program}
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>

                <div className="settings-actions">
                  <button
                    type="button"
                    className="secondary-button"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="primary-button"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </section>
          )}

          {/* Notifications */}
          {activeTab === "Notifications" && (
            <section className="settings-card">
              <div className="settings-card-header">
                <div>
                  <h2>Notification Preferences</h2>
                  <p>
                    Choose which notifications you want to receive.
                  </p>
                </div>
              </div>

              <div className="settings-options">
                <div className="settings-option">
                  <div>
                    <strong>Attendance Reminders</strong>
                    <p>
                      Receive reminders when you have not recorded
                      your attendance.
                    </p>
                  </div>

                  <button
                    className={`toggle ${
                      notifications.attendance
                        ? "on"
                        : ""
                    }`}
                    onClick={() =>
                      handleNotificationChange("attendance")
                    }
                  >
                    <span></span>
                  </button>
                </div>

                <div className="settings-option">
                  <div>
                    <strong>Task Reminders</strong>
                    <p>
                      Get notified about upcoming task deadlines.
                    </p>
                  </div>

                  <button
                    className={`toggle ${
                      notifications.tasks ? "on" : ""
                    }`}
                    onClick={() =>
                      handleNotificationChange("tasks")
                    }
                  >
                    <span></span>
                  </button>
                </div>

                <div className="settings-option">
                  <div>
                    <strong>Daily Log Reminders</strong>
                    <p>
                      Receive reminders to submit your daily log.
                    </p>
                  </div>

                  <button
                    className={`toggle ${
                      notifications.dailyLogs
                        ? "on"
                        : ""
                    }`}
                    onClick={() =>
                      handleNotificationChange("dailyLogs")
                    }
                  >
                    <span></span>
                  </button>
                </div>

                <div className="settings-option">
                  <div>
                    <strong>Announcements</strong>
                    <p>
                      Receive internship announcements and updates.
                    </p>
                  </div>

                  <button
                    className={`toggle ${
                      notifications.announcements
                        ? "on"
                        : ""
                    }`}
                    onClick={() =>
                      handleNotificationChange(
                        "announcements"
                      )
                    }
                  >
                    <span></span>
                  </button>
                </div>

                <div className="settings-option">
                  <div>
                    <strong>Email Notifications</strong>
                    <p>
                      Receive important system notifications through
                      email.
                    </p>
                  </div>

                  <button
                    className={`toggle ${
                      notifications.email ? "on" : ""
                    }`}
                    onClick={() =>
                      handleNotificationChange("email")
                    }
                  >
                    <span></span>
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Appearance */}
          {activeTab === "Appearance" && (
            <section className="settings-card">
              <div className="settings-card-header">
                <div>
                  <h2>Appearance</h2>
                  <p>
                    Customize how the OJT Tracker looks.
                  </p>
                </div>
              </div>

              <div className="appearance-section">
                <h3>Theme</h3>

                <div className="theme-options">
                  <button
                    className={!darkMode ? "selected" : ""}
                    onClick={() => {
                      setDarkMode(false);
                      setMessage("Light mode selected.");
                    }}
                  >
                    <div className="theme-preview light-preview">
                      <div></div>
                    </div>

                    <strong>Light</strong>

                    <span>
                      Clean and bright interface
                    </span>
                  </button>

                  <button
                    className={darkMode ? "selected" : ""}
                    onClick={() => {
                      setDarkMode(true);
                      setMessage("Dark mode selected.");
                    }}
                  >
                    <div className="theme-preview dark-preview">
                      <div></div>
                    </div>

                    <strong>Dark</strong>

                    <span>
                      Dark interface for low-light environments
                    </span>
                  </button>
                </div>
              </div>

              <div className="appearance-section">
                <h3>Quick Theme Toggle</h3>

                <div className="theme-toggle-row">
                  <div>
                    <strong>
                      {darkMode
                        ? "Dark Mode"
                        : "Light Mode"}
                    </strong>

                    <p>
                      Toggle your preferred interface theme.
                    </p>
                  </div>

                  <button
                    className={`toggle ${
                      darkMode ? "on" : ""
                    }`}
                    onClick={toggleDarkMode}
                  >
                    <span></span>
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Security */}
          {activeTab === "Security" && (
            <section className="settings-card">
              <div className="settings-card-header">
                <div>
                  <h2>Security</h2>
                  <p>
                    Manage your password and account security.
                  </p>
                </div>
              </div>

              <form onSubmit={updatePassword}>
                <div className="security-form">
                  <div className="settings-form-group">
                    <label>Current Password</label>

                    <input
                      type="password"
                      name="current"
                      value={passwords.current}
                      onChange={handlePasswordChange}
                      placeholder="Enter current password"
                    />
                  </div>

                  <div className="settings-form-group">
                    <label>New Password</label>

                    <input
                      type="password"
                      name="newPassword"
                      value={passwords.newPassword}
                      onChange={handlePasswordChange}
                      placeholder="Enter new password"
                    />
                  </div>

                  <div className="settings-form-group">
                    <label>Confirm New Password</label>

                    <input
                      type="password"
                      name="confirm"
                      value={passwords.confirm}
                      onChange={handlePasswordChange}
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>

                <div className="password-requirements">
                  <h3>Password Requirements</h3>

                  <p>✓ At least 8 characters</p>
                  <p>✓ Contains uppercase and lowercase letters</p>
                  <p>✓ Contains at least one number</p>
                  <p>✓ Avoid using common passwords</p>
                </div>

                <div className="settings-actions">
                  <button
                    type="submit"
                    className="primary-button"
                  >
                    Update Password
                  </button>
                </div>
              </form>

              <div className="danger-zone">
                <div>
                  <h3>Account Information</h3>

                  <p>
                    Your account is currently active and connected
                    to the OJT Tracker system.
                  </p>
                </div>

                <span className="account-status">
                  Active
                </span>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default Settings;