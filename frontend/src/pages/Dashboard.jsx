function Dashboard() {
  return (
    <>
      {/* Header */}
      <header className="header">

        <div>
          <p className="breadcrumb">
            Dashboard
          </p>

          <h1>
            Good morning, Lance 👋
          </h1>

          <p className="subtitle">
            Here's what's happening with your OJT today.
          </p>
        </div>

        <div className="header-actions">

          <button className="icon-btn">
            ☼
          </button>

          <button className="icon-btn">
            🔔
          </button>

          <div className="profile">

            <div className="avatar">
              L
            </div>

            <div>
              <strong>
                Lance Sardon
              </strong>

              <span>
                BS Information Technology
              </span>
            </div>

          </div>

        </div>

      </header>

      {/* Statistics */}
      <section className="stats-grid">

        <div className="stat-card">

          <div className="stat-top">

            <span className="stat-icon green">
              ◷
            </span>

            <span className="stat-label">
              TOTAL HOURS
            </span>

          </div>

          <h2>
            320 <small>hrs</small>
          </h2>

          <div className="stat-footer">
            <span className="positive">
              +12 hrs
            </span>

            <span>
              this week
            </span>
          </div>

        </div>

        <div className="stat-card">

          <div className="stat-top">

            <span className="stat-icon blue">
              ◎
            </span>

            <span className="stat-label">
              REQUIRED HOURS
            </span>

          </div>

          <h2>
            480 <small>hrs</small>
          </h2>

          <div className="stat-footer">

            <span>
              160 hrs
            </span>

            <span>
              remaining
            </span>

          </div>

        </div>

        <div className="stat-card">

          <div className="stat-top">

            <span className="stat-icon purple">
              %
            </span>

            <span className="stat-label">
              PROGRESS
            </span>

          </div>

          <h2>
            67<small>%</small>
          </h2>

          <div className="progress-small">
            <div className="progress-small-fill"></div>
          </div>

        </div>

        <div className="stat-card">

          <div className="stat-top">

            <span className="stat-icon orange">
              ✓
            </span>

            <span className="stat-label">
              ATTENDANCE
            </span>

          </div>

          <h2>
            95<small>%</small>
          </h2>

          <div className="stat-footer">

            <span className="positive">
              Excellent
            </span>

            <span>
              attendance
            </span>

          </div>

        </div>

      </section>

      {/* Main Dashboard */}
      <section className="dashboard-grid">

        {/* Progress */}
        <div className="card">

          <div className="card-header">

            <div>
              <h3>
                OJT Progress
              </h3>

              <p>
                Your internship completion progress
              </p>
            </div>

            <button className="view-btn">
              View Details →
            </button>

          </div>

          <div className="progress-container">

            <div className="progress-circle">

              <div className="progress-inner">

                <strong>
                  67%
                </strong>

                <span>
                  Complete
                </span>

              </div>

            </div>

            <div className="progress-details">

              <div className="progress-row">
                <span>Completed</span>
                <strong>320 hrs</strong>
              </div>

              <div className="progress-row">
                <span>Remaining</span>
                <strong>160 hrs</strong>
              </div>

              <div className="progress-row">
                <span>Required</span>
                <strong>480 hrs</strong>
              </div>

              <div className="overall-progress">
                <div className="overall-fill"></div>
              </div>

            </div>

          </div>

        </div>

        {/* Attendance */}
        <div className="card">

          <div className="card-header">

            <div>
              <h3>
                Today's Attendance
              </h3>

              <p>
                October 3, 2026
              </p>
            </div>

            <span className="status-badge">
              ● Present
            </span>

          </div>

          <div className="attendance-times">

            <div className="time-box">
              <span>TIME IN</span>
              <strong>8:02 AM</strong>
            </div>

            <div className="time-line"></div>

            <div className="time-box">
              <span>TIME OUT</span>
              <strong>5:04 PM</strong>
            </div>

          </div>

          <div className="hours-today">

            <span>
              Today's total
            </span>

            <strong>
              8h 02m
            </strong>

          </div>

        </div>

      </section>

      {/* Bottom */}
      <section className="bottom-grid">

        {/* Logs */}
        <div className="card">

          <div className="card-header">

            <div>
              <h3>
                Recent Daily Logs
              </h3>

              <p>
                Your latest OJT activities
              </p>
            </div>

            <button className="view-btn">
              View All →
            </button>

          </div>

          <div className="log-list">

            <div className="log-item">

              <div className="date-box">
                <strong>03</strong>
                <span>OCT</span>
              </div>

              <div className="log-content">

                <strong>
                  Developed student dashboard UI
                </strong>

                <span>
                  Frontend Development • 8 hours
                </span>

              </div>

              <span className="completed">
                Completed
              </span>

            </div>

            <div className="log-item">

              <div className="date-box">
                <strong>02</strong>
                <span>OCT</span>
              </div>

              <div className="log-content">

                <strong>
                  Database documentation
                </strong>

                <span>
                  Documentation • 8 hours
                </span>

              </div>

              <span className="completed">
                Completed
              </span>

            </div>

            <div className="log-item">

              <div className="date-box">
                <strong>01</strong>
                <span>OCT</span>
              </div>

              <div className="log-content">

                <strong>
                  System requirements analysis
                </strong>

                <span>
                  Planning • 8 hours
                </span>

              </div>

              <span className="completed">
                Completed
              </span>

            </div>

          </div>

        </div>

        {/* Tasks */}
        <div className="card">

          <div className="card-header">

            <div>
              <h3>
                My Tasks
              </h3>

              <p>
                Tasks assigned to you
              </p>
            </div>

            <button className="view-btn">
              View All →
            </button>

          </div>

          <div className="task-list">

            <div className="task-item">

              <span className="checkbox checked">
                ✓
              </span>

              <div>
                <strong>
                  Complete UI design
                </strong>

                <span>
                  Completed
                </span>
              </div>

            </div>

            <div className="task-item">

              <span className="checkbox"></span>

              <div>
                <strong>
                  Submit weekly report
                </strong>

                <span>
                  Due today
                </span>
              </div>

            </div>

            <div className="task-item">

              <span className="checkbox"></span>

              <div>
                <strong>
                  Update OJT journal
                </strong>

                <span>
                  Due tomorrow
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Dashboard;