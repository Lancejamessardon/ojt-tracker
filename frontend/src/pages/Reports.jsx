import { useState } from "react";

function Reports() {
  const [selectedReport, setSelectedReport] = useState("OJT Summary");

  const reportTypes = [
    "OJT Summary",
    "Attendance Report",
    "Task Report",
    "Daily Log Report",
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="reports-page">
      {/* Header */}
      <div className="page-header no-print">
        <div>
          <div className="breadcrumb">
            OJT <span>/</span> Reports
          </div>

          <h1>Reports</h1>

          <p>
            Generate and review your internship reports.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={handlePrint}
        >
          🖨️ Print Report
        </button>
      </div>

      {/* Report Selector */}
      <div className="report-selector no-print">
        <div>
          <h2>Report Type</h2>
          <p>Select the report you want to view.</p>
        </div>

        <div className="report-tabs">
          {reportTypes.map((report) => (
            <button
              key={report}
              className={
                selectedReport === report ? "active" : ""
              }
              onClick={() => setSelectedReport(report)}
            >
              {report}
            </button>
          ))}
        </div>
      </div>

      {/* Printable Report */}
      <div className="printable-report">
        {/* Report Header */}
        <div className="report-document-header">
          <div className="report-logo">
            <div className="report-logo-icon">
              O
            </div>

            <div>
              <h2>OJT Tracker</h2>
              <span>Internship Management System</span>
            </div>
          </div>

          <div className="report-document-title">
            <span>INTERNSHIP REPORT</span>
            <h1>{selectedReport}</h1>
          </div>
        </div>

        <div className="report-divider"></div>

        {/* Student Information */}
        <section className="report-section">
          <div className="report-section-title">
            <h2>Student Information</h2>
          </div>

          <div className="report-info-grid">
            <div>
              <span>Student Name</span>
              <strong>Lance James Sardon</strong>
            </div>

            <div>
              <span>Student ID</span>
              <strong>2026-IT-001</strong>
            </div>

            <div>
              <span>Program</span>
              <strong>BS Information Technology</strong>
            </div>

            <div>
              <span>Year Level</span>
              <strong>4th Year</strong>
            </div>

            <div>
              <span>Company</span>
              <strong>OJT Partner Company</strong>
            </div>

            <div>
              <span>Department</span>
              <strong>Information Technology</strong>
            </div>

            <div>
              <span>Supervisor</span>
              <strong>OJT Supervisor</strong>
            </div>

            <div>
              <span>Position</span>
              <strong>IT Intern</strong>
            </div>
          </div>
        </section>

        {/* OJT Period */}
        <section className="report-section">
          <div className="report-section-title">
            <h2>OJT Period</h2>
          </div>

          <div className="report-period-grid">
            <div>
              <span>Start Date</span>
              <strong>August 1, 2026</strong>
            </div>

            <div>
              <span>End Date</span>
              <strong>October 30, 2026</strong>
            </div>

            <div>
              <span>Required Hours</span>
              <strong>480 Hours</strong>
            </div>

            <div>
              <span>Completed Hours</span>
              <strong>320 Hours</strong>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="report-section">
          <div className="report-section-title">
            <h2>OJT Summary</h2>
          </div>

          <div className="report-summary-grid">
            <div className="report-summary-box">
              <span>Overall Progress</span>
              <strong>66%</strong>
            </div>

            <div className="report-summary-box">
              <span>Attendance Rate</span>
              <strong>96%</strong>
            </div>

            <div className="report-summary-box">
              <span>Tasks Completed</span>
              <strong>12 / 18</strong>
            </div>

            <div className="report-summary-box">
              <span>Daily Logs</span>
              <strong>40</strong>
            </div>
          </div>
        </section>

        {/* Attendance Report */}
        {(selectedReport === "OJT Summary" ||
          selectedReport === "Attendance Report") && (
          <section className="report-section">
            <div className="report-section-title">
              <h2>Attendance Summary</h2>
            </div>

            <table className="report-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time In</th>
                  <th>Time Out</th>
                  <th>Total Hours</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>October 3, 2026</td>
                  <td>8:02 AM</td>
                  <td>5:04 PM</td>
                  <td>8h 02m</td>
                  <td>
                    <span className="report-status present">
                      Present
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>October 2, 2026</td>
                  <td>7:58 AM</td>
                  <td>5:01 PM</td>
                  <td>8h 03m</td>
                  <td>
                    <span className="report-status present">
                      Present
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>October 1, 2026</td>
                  <td>8:05 AM</td>
                  <td>5:00 PM</td>
                  <td>7h 55m</td>
                  <td>
                    <span className="report-status present">
                      Present
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>September 30, 2026</td>
                  <td>8:12 AM</td>
                  <td>5:06 PM</td>
                  <td>7h 54m</td>
                  <td>
                    <span className="report-status late">
                      Late
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>September 29, 2026</td>
                  <td>8:00 AM</td>
                  <td>5:00 PM</td>
                  <td>8h 00m</td>
                  <td>
                    <span className="report-status present">
                      Present
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {/* Task Report */}
        {(selectedReport === "OJT Summary" ||
          selectedReport === "Task Report") && (
          <section className="report-section">
            <div className="report-section-title">
              <h2>Task Summary</h2>
            </div>

            <div className="task-report-summary">
              <div>
                <span>Total Tasks</span>
                <strong>18</strong>
              </div>

              <div>
                <span>Completed</span>
                <strong>12</strong>
              </div>

              <div>
                <span>In Progress</span>
                <strong>3</strong>
              </div>

              <div>
                <span>To Do</span>
                <strong>3</strong>
              </div>
            </div>

            <table className="report-table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Category</th>
                  <th>Priority</th>
                  <th>Progress</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Create Login Page</td>
                  <td>Frontend</td>
                  <td>High</td>
                  <td>80%</td>
                  <td>In Progress</td>
                </tr>

                <tr>
                  <td>Design Dashboard</td>
                  <td>UI Design</td>
                  <td>High</td>
                  <td>45%</td>
                  <td>In Progress</td>
                </tr>

                <tr>
                  <td>Setup React Router</td>
                  <td>Development</td>
                  <td>Low</td>
                  <td>100%</td>
                  <td>Completed</td>
                </tr>

                <tr>
                  <td>Create Project Structure</td>
                  <td>Development</td>
                  <td>Low</td>
                  <td>100%</td>
                  <td>Completed</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {/* Daily Logs */}
        {(selectedReport === "OJT Summary" ||
          selectedReport === "Daily Log Report") && (
          <section className="report-section">
            <div className="report-section-title">
              <h2>Daily Log Summary</h2>
            </div>

            <table className="report-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Activity</th>
                  <th>Hours</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>October 3, 2026</td>
                  <td>Frontend Development</td>
                  <td>8h</td>
                  <td>Submitted</td>
                </tr>

                <tr>
                  <td>October 2, 2026</td>
                  <td>React Router Setup</td>
                  <td>8h</td>
                  <td>Submitted</td>
                </tr>

                <tr>
                  <td>October 1, 2026</td>
                  <td>Project Setup</td>
                  <td>8h</td>
                  <td>Submitted</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {/* Skills */}
        <section className="report-section">
          <div className="report-section-title">
            <h2>Skills Development</h2>
          </div>

          <div className="report-skills-grid">
            <div>
              <span>Frontend Development</span>
              <strong>85%</strong>
            </div>

            <div>
              <span>React.js</span>
              <strong>70%</strong>
            </div>

            <div>
              <span>UI/UX Design</span>
              <strong>65%</strong>
            </div>

            <div>
              <span>Database Management</span>
              <strong>55%</strong>
            </div>

            <div>
              <span>Communication</span>
              <strong>80%</strong>
            </div>

            <div>
              <span>Problem Solving</span>
              <strong>75%</strong>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="report-footer">
          <div>
            <span>Generated by</span>
            <strong>OJT Tracker</strong>
          </div>

          <div>
            <span>Report Date</span>
            <strong>October 3, 2026</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;