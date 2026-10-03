import { useState } from "react";

function DailyLog() {
  const [showForm, setShowForm] = useState(false);

  const [logs, setLogs] = useState([
    {
      id: 1,
      date: "October 3, 2026",
      title: "Frontend Development",
      tasks:
        "Worked on the OJT Tracker dashboard and improved the user interface using React and CSS.",
      learning:
        "Learned how React components and state management work together.",
      challenge:
        "Had difficulty organizing the page structure and responsive styles.",
      hours: "8",
      status: "Submitted",
    },
    {
      id: 2,
      date: "October 2, 2026",
      title: "React Router Setup",
      tasks:
        "Created routes for Dashboard, OJT Profile, Attendance, Daily Log, Tasks, Progress, Reports, and Settings.",
      learning:
        "Learned how React Router handles navigation between pages.",
      challenge:
        "Encountered an import path and file naming issue.",
      hours: "8",
      status: "Submitted",
    },
    {
      id: 3,
      date: "October 1, 2026",
      title: "Project Setup",
      tasks:
        "Initialized the React and Vite project and created the initial dashboard layout.",
      learning:
        "Learned the basic structure of a React application.",
      challenge:
        "Getting familiar with the new project structure.",
      hours: "8",
      status: "Submitted",
    },
  ]);

  const [form, setForm] = useState({
    date: "October 3, 2026",
    title: "",
    tasks: "",
    learning: "",
    challenge: "",
    hours: "8",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.title || !form.tasks || !form.learning) {
      return;
    }

    const newLog = {
      id: Date.now(),
      ...form,
      status: "Submitted",
    };

    setLogs((current) => [newLog, ...current]);

    setForm({
      date: "October 3, 2026",
      title: "",
      tasks: "",
      learning: "",
      challenge: "",
      hours: "8",
    });

    setShowForm(false);
  };

  return (
    <div className="page">

      {/* =========================
          PAGE HEADER
      ========================= */}

      <div className="page-header">

        <div>
          <p className="breadcrumb">
            OJT / Daily Log
          </p>

          <h1>
            Daily Log
          </h1>

          <p className="subtitle">
            Record your daily OJT activities, learnings, and experiences.
          </p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setShowForm(true)}
        >
          + New Daily Log
        </button>

      </div>


      {/* =========================
          SUMMARY
      ========================= */}

      <section className="daily-log-summary">

        <div className="daily-summary-card">

          <div className="daily-summary-icon green">
            📝
          </div>

          <div>
            <span>
              TOTAL LOGS
            </span>

            <strong>
              {logs.length}
            </strong>

            <small>
              Submitted entries
            </small>
          </div>

        </div>


        <div className="daily-summary-card">

          <div className="daily-summary-icon blue">
            ✓
          </div>

          <div>
            <span>
              SUBMITTED
            </span>

            <strong>
              {logs.filter(
                (log) => log.status === "Submitted"
              ).length}
            </strong>

            <small>
              Completed logs
            </small>
          </div>

        </div>


        <div className="daily-summary-card">

          <div className="daily-summary-icon orange">
            ⏱
          </div>

          <div>
            <span>
              HOURS LOGGED
            </span>

            <strong>
              {logs.reduce(
                (total, log) =>
                  total + Number(log.hours || 0),
                0
              )}
            </strong>

            <small>
              Total recorded hours
            </small>
          </div>

        </div>


        <div className="daily-summary-card">

          <div className="daily-summary-icon purple">
            📅
          </div>

          <div>
            <span>
              THIS MONTH
            </span>

            <strong>
              October
            </strong>

            <small>
              Current OJT period
            </small>
          </div>

        </div>

      </section>


      {/* =========================
          LOG LIST
      ========================= */}

      <section className="daily-log-layout">

        <div className="daily-log-list">

          {logs.map((log) => (

            <article
              className="daily-log-card"
              key={log.id}
            >

              <div className="daily-log-card-header">

                <div className="daily-log-date">

                  <div className="date-icon">
                    📅
                  </div>

                  <div>

                    <span>
                      {log.date}
                    </span>

                    <h3>
                      {log.title}
                    </h3>

                  </div>

                </div>

                <div className="daily-log-status">
                  ✓ {log.status}
                </div>

              </div>


              <div className="daily-log-content">

                <div className="log-section">

                  <div className="log-section-title">
                    <span className="log-icon">
                      ✓
                    </span>

                    <strong>
                      Tasks Performed
                    </strong>
                  </div>

                  <p>
                    {log.tasks}
                  </p>

                </div>


                <div className="log-section">

                  <div className="log-section-title">
                    <span className="log-icon learning">
                      💡
                    </span>

                    <strong>
                      What I Learned
                    </strong>
                  </div>

                  <p>
                    {log.learning}
                  </p>

                </div>


                <div className="log-section">

                  <div className="log-section-title">
                    <span className="log-icon challenge">
                      !
                    </span>

                    <strong>
                      Challenges
                    </strong>
                  </div>

                  <p>
                    {log.challenge}
                  </p>

                </div>

              </div>


              <div className="daily-log-footer">

                <span>
                  ⏱ {log.hours} hours rendered
                </span>

                <button
                  className="view-log-btn"
                  onClick={() => alert("Log details are already displayed.")}
                >
                  View Details →
                </button>

              </div>

            </article>

          ))}

        </div>


        {/* =========================
            RIGHT SIDEBAR
        ========================= */}

        <aside className="daily-log-side">

          <div className="card">

            <div className="section-heading">

              <div className="section-heading-icon">
                💡
              </div>

              <div>

                <h3>
                  Daily Log Tips
                </h3>

                <p>
                  Make your entries meaningful
                </p>

              </div>

            </div>


            <div className="log-tips">

              <div className="tip-item">

                <span>
                  01
                </span>

                <p>
                  Describe what you actually worked on during the day.
                </p>

              </div>


              <div className="tip-item">

                <span>
                  02
                </span>

                <p>
                  Write down new technical skills or concepts you learned.
                </p>

              </div>


              <div className="tip-item">

                <span>
                  03
                </span>

                <p>
                  Mention problems you encountered and how you solved them.
                </p>

              </div>


              <div className="tip-item">

                <span>
                  04
                </span>

                <p>
                  Submit your daily log consistently.
                </p>

              </div>

            </div>

          </div>


          <div className="card weekly-log-card">

            <div className="section-heading">

              <div className="section-heading-icon calendar">
                📊
              </div>

              <div>

                <h3>
                  Weekly Activity
                </h3>

                <p>
                  This week's logged hours
                </p>

              </div>

            </div>


            <div className="weekly-chart">

              <div className="chart-day">
                <div
                  className="chart-bar"
                  style={{ height: "75%" }}
                ></div>

                <span>
                  Mon
                </span>
              </div>


              <div className="chart-day">
                <div
                  className="chart-bar"
                  style={{ height: "82%" }}
                ></div>

                <span>
                  Tue
                </span>
              </div>


              <div className="chart-day">
                <div
                  className="chart-bar"
                  style={{ height: "90%" }}
                ></div>

                <span>
                  Wed
                </span>
              </div>


              <div className="chart-day">
                <div
                  className="chart-bar"
                  style={{ height: "88%" }}
                ></div>

                <span>
                  Thu
                </span>
              </div>


              <div className="chart-day">
                <div
                  className="chart-bar today"
                  style={{ height: "60%" }}
                ></div>

                <span>
                  Fri
                </span>
              </div>

            </div>

          </div>

        </aside>

      </section>


      {/* =========================
          NEW LOG MODAL
      ========================= */}

      {showForm && (

        <div
          className="modal-overlay"
          onClick={() => setShowForm(false)}
        >

          <div
            className="modal daily-log-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="modal-header">

              <div>

                <h2>
                  New Daily Log
                </h2>

                <p>
                  Record your OJT activities for today.
                </p>

              </div>

              <button
                className="modal-close"
                onClick={() => setShowForm(false)}
              >
                ×
              </button>

            </div>


            <form onSubmit={handleSubmit}>

              <div className="modal-body">

                <div className="form-grid">

                  <div className="form-group">

                    <label>
                      Date
                    </label>

                    <input
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      Hours Rendered
                    </label>

                    <select
                      name="hours"
                      value={form.hours}
                      onChange={handleChange}
                    >

                      <option value="4">
                        4 hours
                      </option>

                      <option value="6">
                        6 hours
                      </option>

                      <option value="7">
                        7 hours
                      </option>

                      <option value="8">
                        8 hours
                      </option>

                      <option value="9">
                        9 hours
                      </option>

                    </select>

                  </div>

                </div>


                <div className="form-group">

                  <label>
                    Log Title
                  </label>

                  <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="e.g. Frontend Development"
                  />

                </div>


                <div className="form-group">

                  <label>
                    Tasks Performed
                  </label>

                  <textarea
                    name="tasks"
                    value={form.tasks}
                    onChange={handleChange}
                    placeholder="Describe the tasks you completed today..."
                    rows="4"
                  ></textarea>

                </div>


                <div className="form-group">

                  <label>
                    What I Learned
                  </label>

                  <textarea
                    name="learning"
                    value={form.learning}
                    onChange={handleChange}
                    placeholder="What new skills or knowledge did you gain?"
                    rows="3"
                  ></textarea>

                </div>


                <div className="form-group">

                  <label>
                    Challenges
                  </label>

                  <textarea
                    name="challenge"
                    value={form.challenge}
                    onChange={handleChange}
                    placeholder="What challenges did you encounter?"
                    rows="3"
                  ></textarea>

                </div>

              </div>


              <div className="modal-footer">

                <button
                  type="button"
                  className="secondary-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-btn"
                >
                  Submit Daily Log
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default DailyLog;