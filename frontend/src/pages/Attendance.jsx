import { useState } from "react";

function Attendance() {
  const [isTimedIn, setIsTimedIn] = useState(false);
  const [timeIn, setTimeIn] = useState(null);
  const [timeOut, setTimeOut] = useState(null);

  const [attendance, setAttendance] = useState([
    {
      date: "October 3, 2026",
      day: "Friday",
      timeIn: "8:02 AM",
      timeOut: "5:04 PM",
      hours: "8h 02m",
      status: "Present",
    },
    {
      date: "October 2, 2026",
      day: "Thursday",
      timeIn: "7:58 AM",
      timeOut: "5:01 PM",
      hours: "8h 03m",
      status: "Present",
    },
    {
      date: "October 1, 2026",
      day: "Wednesday",
      timeIn: "8:05 AM",
      timeOut: "5:00 PM",
      hours: "7h 55m",
      status: "Present",
    },
    {
      date: "September 30, 2026",
      day: "Tuesday",
      timeIn: "8:12 AM",
      timeOut: "5:06 PM",
      hours: "7h 54m",
      status: "Late",
    },
    {
      date: "September 29, 2026",
      day: "Monday",
      timeIn: "8:00 AM",
      timeOut: "5:00 PM",
      hours: "8h 00m",
      status: "Present",
    },
  ]);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const handleTimeIn = () => {
    const now = new Date();

    setTimeIn(now);
    setTimeOut(null);
    setIsTimedIn(true);
  };

  const handleTimeOut = () => {
    const now = new Date();

    setTimeOut(now);
    setIsTimedIn(false);

    const newRecord = {
      date: now.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      day: now.toLocaleDateString("en-US", {
        weekday: "long",
      }),
      timeIn: timeIn ? formatTime(timeIn) : "--",
      timeOut: formatTime(now),
      hours: "8h 00m",
      status: "Present",
    };

    setAttendance((current) => [
      newRecord,
      ...current,
    ]);
  };

  return (
    <div className="page">

      {/* PAGE HEADER */}

      <div className="page-header">

        <div>
          <p className="breadcrumb">
            OJT / Attendance
          </p>

          <h1>
            Attendance
          </h1>

          <p className="subtitle">
            Track your daily attendance and working hours.
          </p>
        </div>

        <div className="attendance-date">
          📅 October 3, 2026
        </div>

      </div>


      {/* ATTENDANCE STATUS */}

      <section className="attendance-status-card">

        <div className="attendance-status-left">

          <div
            className={`attendance-status-icon ${
              isTimedIn ? "online" : ""
            }`}
          >
            {isTimedIn ? "●" : "○"}
          </div>

          <div>

            <span className="attendance-label">
              TODAY'S STATUS
            </span>

            <h2>
              {isTimedIn
                ? "Currently Working"
                : "Not Timed In"}
            </h2>

            <p>
              {isTimedIn
                ? `Time in: ${
                    timeIn ? formatTime(timeIn) : "--"
                  }`
                : "You have not started your OJT session today."}
            </p>

          </div>

        </div>


        <div className="attendance-action">

          {!isTimedIn ? (

            <button
              className="time-btn time-in-btn"
              onClick={handleTimeIn}
            >
              <span>▶</span>
              Time In
            </button>

          ) : (

            <button
              className="time-btn time-out-btn"
              onClick={handleTimeOut}
            >
              <span>■</span>
              Time Out
            </button>

          )}

        </div>

      </section>


      {/* TODAY'S DETAILS */}

      <section className="attendance-summary-grid">

        <div className="attendance-summary-card">

          <div className="attendance-summary-icon green">
            ◷
          </div>

          <div>

            <span>
              TIME IN
            </span>

            <strong>
              {timeIn ? formatTime(timeIn) : "8:00 AM"}
            </strong>

            <small>
              Today's arrival
            </small>

          </div>

        </div>


        <div className="attendance-summary-card">

          <div className="attendance-summary-icon blue">
            ◴
          </div>

          <div>

            <span>
              TIME OUT
            </span>

            <strong>
              {timeOut ? formatTime(timeOut) : "--"}
            </strong>

            <small>
              Today's departure
            </small>

          </div>

        </div>


        <div className="attendance-summary-card">

          <div className="attendance-summary-icon purple">
            ⏱
          </div>

          <div>

            <span>
              TODAY'S HOURS
            </span>

            <strong>
              {isTimedIn ? "Working" : "8h 00m"}
            </strong>

            <small>
              Total work duration
            </small>

          </div>

        </div>


        <div className="attendance-summary-card">

          <div className="attendance-summary-icon orange">
            ✓
          </div>

          <div>

            <span>
              ATTENDANCE RATE
            </span>

            <strong>
              96%
            </strong>

            <small>
              Overall attendance
            </small>

          </div>

        </div>

      </section>


      {/* MONTHLY OVERVIEW */}

      <section className="attendance-content-grid">

        <div className="card">

          <div className="section-heading">

            <div className="section-heading-icon">
              📊
            </div>

            <div>

              <h3>
                Monthly Overview
              </h3>

              <p>
                Your attendance summary for October
              </p>

            </div>

          </div>


          <div className="monthly-stats">

            <div className="monthly-stat">

              <span className="stat-number">
                20
              </span>

              <span className="stat-label">
                WORKING DAYS
              </span>

            </div>


            <div className="monthly-stat">

              <span className="stat-number present">
                19
              </span>

              <span className="stat-label">
                PRESENT
              </span>

            </div>


            <div className="monthly-stat">

              <span className="stat-number late">
                1
              </span>

              <span className="stat-label">
                LATE
              </span>

            </div>


            <div className="monthly-stat">

              <span className="stat-number absent">
                0
              </span>

              <span className="stat-label">
                ABSENT
              </span>

            </div>

          </div>


          <div className="attendance-progress">

            <div className="attendance-progress-header">

              <span>
                Attendance Rate
              </span>

              <strong>
                96%
              </strong>

            </div>

            <div className="attendance-progress-bar">

              <div
                className="attendance-progress-fill"
                style={{
                  width: "96%",
                }}
              ></div>

            </div>

          </div>

        </div>


        {/* QUICK INFO */}

        <div className="card">

          <div className="section-heading">

            <div className="section-heading-icon calendar">
              🗓
            </div>

            <div>

              <h3>
                OJT Schedule
              </h3>

              <p>
                Your regular working schedule
              </p>

            </div>

          </div>


          <div className="schedule-list">

            <div className="schedule-row">

              <span>
                Monday - Friday
              </span>

              <strong>
                Working Days
              </strong>

            </div>


            <div className="schedule-row">

              <span>
                Start Time
              </span>

              <strong>
                8:00 AM
              </strong>

            </div>


            <div className="schedule-row">

              <span>
                End Time
              </span>

              <strong>
                5:00 PM
              </strong>

            </div>


            <div className="schedule-row">

              <span>
                Daily Hours
              </span>

              <strong>
                8 Hours
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* ATTENDANCE HISTORY */}

      <section className="card attendance-history">

        <div className="section-heading">

          <div className="section-heading-icon">
            📋
          </div>

          <div>

            <h3>
              Attendance History
            </h3>

            <p>
              Your recent OJT attendance records
            </p>

          </div>

        </div>


        <div className="attendance-table-wrapper">

          <table className="attendance-table">

            <thead>

              <tr>

                <th>
                  DATE
                </th>

                <th>
                  DAY
                </th>

                <th>
                  TIME IN
                </th>

                <th>
                  TIME OUT
                </th>

                <th>
                  HOURS
                </th>

                <th>
                  STATUS
                </th>

              </tr>

            </thead>


            <tbody>

              {attendance.map((record, index) => (

                <tr key={`${record.date}-${index}`}>

                  <td>
                    <strong>
                      {record.date}
                    </strong>
                  </td>

                  <td>
                    {record.day}
                  </td>

                  <td>
                    {record.timeIn}
                  </td>

                  <td>
                    {record.timeOut}
                  </td>

                  <td>
                    <strong>
                      {record.hours}
                    </strong>
                  </td>

                  <td>

                    <span
                      className={`attendance-status ${
                        record.status === "Late"
                          ? "late-status"
                          : "present-status"
                      }`}
                    >
                      ● {record.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

    </div>
  );
}

export default Attendance;