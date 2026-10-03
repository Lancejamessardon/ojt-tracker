import { useState } from "react";

function OJTProfile() {
  const [showEdit, setShowEdit] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "Lance James",
    lastName: "Sardon",
    studentId: "2026-IT-001",
    program: "BS Information Technology",
    yearLevel: "4th Year",
    school: "Your University",
    company: "OJT Partner Company",
    department: "Information Technology",
    supervisor: "OJT Supervisor",
    position: "IT Intern",
    startDate: "August 1, 2026",
    endDate: "October 30, 2026",
    requiredHours: 480,
    completedHours: 320,
  });

  const progress = Math.round(
    (profile.completedHours / profile.requiredHours) * 100
  );

  const remainingHours =
    profile.requiredHours - profile.completedHours;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile((current) => ({
      ...current,
      [name]: value,
    }));
  };

  return (
    <div className="page">

      {/* =========================
          PAGE HEADER
      ========================= */}

      <div className="page-header">

        <div>
          <p className="breadcrumb">
            My OJT / Profile
          </p>

          <h1>
            OJT Profile
          </h1>

          <p className="subtitle">
            Manage your internship information and OJT details.
          </p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setShowEdit(true)}
        >
          ✎ Edit Profile
        </button>

      </div>


      {/* =========================
          PROFILE HERO
      ========================= */}

      <section className="ojt-profile-hero">

        <div className="ojt-profile-main">

          <div className="profile-photo">
            L
          </div>

          <div className="profile-identity">

            <div className="profile-name-row">

              <h2>
                {profile.firstName} {profile.lastName}
              </h2>

              <span className="active-badge">
                ● Active OJT
              </span>

            </div>

            <p>
              {profile.program}
            </p>

            <div className="profile-meta">

              <span>
                🎓 {profile.yearLevel}
              </span>

              <span>
                🆔 {profile.studentId}
              </span>

              <span>
                🏫 {profile.school}
              </span>

            </div>

          </div>

        </div>

        <div className="profile-hero-progress">

          <div className="hero-progress-header">

            <span>
              OJT Progress
            </span>

            <strong>
              {progress}%
            </strong>

          </div>

          <div className="hero-progress-bar">

            <div
              className="hero-progress-fill"
              style={{
                width: `${progress}%`,
              }}
            ></div>

          </div>

          <div className="hero-progress-footer">

            <span>
              {profile.completedHours} hours completed
            </span>

            <span>
              {remainingHours} hours remaining
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          SUMMARY CARDS
      ========================= */}

      <section className="ojt-summary-grid">

        <div className="ojt-summary-card">

          <div className="ojt-summary-icon green">
            ◷
          </div>

          <div>
            <span>
              REQUIRED HOURS
            </span>

            <strong>
              {profile.requiredHours}
            </strong>

            <small>
              Total OJT hours
            </small>
          </div>

        </div>


        <div className="ojt-summary-card">

          <div className="ojt-summary-icon blue">
            ✓
          </div>

          <div>
            <span>
              COMPLETED HOURS
            </span>

            <strong>
              {profile.completedHours}
            </strong>

            <small>
              Hours rendered
            </small>
          </div>

        </div>


        <div className="ojt-summary-card">

          <div className="ojt-summary-icon orange">
            !
          </div>

          <div>
            <span>
              REMAINING HOURS
            </span>

            <strong>
              {remainingHours}
            </strong>

            <small>
              Hours to complete
            </small>
          </div>

        </div>


        <div className="ojt-summary-card">

          <div className="ojt-summary-icon purple">
            %
          </div>

          <div>
            <span>
              COMPLETION
            </span>

            <strong>
              {progress}%
            </strong>

            <small>
              Overall progress
            </small>
          </div>

        </div>

      </section>


      {/* =========================
          INFORMATION GRID
      ========================= */}

      <section className="ojt-info-grid">

        {/* Student Information */}

        <div className="card">

          <div className="section-heading">

            <div className="section-heading-icon">
              👤
            </div>

            <div>
              <h3>
                Student Information
              </h3>

              <p>
                Your personal and academic details
              </p>
            </div>

          </div>


          <div className="details-grid">

            <div className="detail-item">
              <span>Full Name</span>

              <strong>
                {profile.firstName} {profile.lastName}
              </strong>
            </div>


            <div className="detail-item">
              <span>Student ID</span>

              <strong>
                {profile.studentId}
              </strong>
            </div>


            <div className="detail-item">
              <span>Program</span>

              <strong>
                {profile.program}
              </strong>
            </div>


            <div className="detail-item">
              <span>Year Level</span>

              <strong>
                {profile.yearLevel}
              </strong>
            </div>


            <div className="detail-item">
              <span>School</span>

              <strong>
                {profile.school}
              </strong>
            </div>

          </div>

        </div>


        {/* Company Information */}

        <div className="card">

          <div className="section-heading">

            <div className="section-heading-icon company">
              🏢
            </div>

            <div>
              <h3>
                Company Information
              </h3>

              <p>
                Your internship placement details
              </p>
            </div>

          </div>


          <div className="details-grid">

            <div className="detail-item">
              <span>Company</span>

              <strong>
                {profile.company}
              </strong>
            </div>


            <div className="detail-item">
              <span>Department</span>

              <strong>
                {profile.department}
              </strong>
            </div>


            <div className="detail-item">
              <span>Position</span>

              <strong>
                {profile.position}
              </strong>
            </div>


            <div className="detail-item">
              <span>Supervisor</span>

              <strong>
                {profile.supervisor}
              </strong>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          OJT PERIOD
      ========================= */}

      <section className="card ojt-period-card">

        <div className="section-heading">

          <div className="section-heading-icon calendar">
            📅
          </div>

          <div>
            <h3>
              OJT Training Period
            </h3>

            <p>
              Your scheduled internship period
            </p>
          </div>

        </div>


        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot completed-dot">
              ✓
            </div>

            <div>
              <span>
                START DATE
              </span>

              <strong>
                {profile.startDate}
              </strong>

              <small>
                OJT started
              </small>
            </div>

          </div>


          <div className="timeline-line"></div>


          <div className="timeline-item">

            <div className="timeline-dot active-dot">
              ●
            </div>

            <div>
              <span>
                CURRENT STATUS
              </span>

              <strong>
                OJT In Progress
              </strong>

              <small>
                {progress}% completed
              </small>
            </div>

          </div>


          <div className="timeline-line"></div>


          <div className="timeline-item">

            <div className="timeline-dot upcoming-dot">
              →
            </div>

            <div>
              <span>
                EXPECTED END DATE
              </span>

              <strong>
                {profile.endDate}
              </strong>

              <small>
                Target completion
              </small>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          EDIT PROFILE MODAL
      ========================= */}

      {showEdit && (

        <div
          className="modal-overlay"
          onClick={() => setShowEdit(false)}
        >

          <div
            className="modal"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="modal-header">

              <div>
                <h2>
                  Edit Profile
                </h2>

                <p>
                  Update your OJT information.
                </p>
              </div>

              <button
                className="modal-close"
                onClick={() => setShowEdit(false)}
              >
                ×
              </button>

            </div>


            <div className="modal-body">

              <div className="form-grid">

                <div className="form-group">

                  <label>
                    First Name
                  </label>

                  <input
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                  />

                </div>


                <div className="form-group">

                  <label>
                    Last Name
                  </label>

                  <input
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                  />

                </div>

              </div>


              <div className="form-grid">

                <div className="form-group">

                  <label>
                    Student ID
                  </label>

                  <input
                    name="studentId"
                    value={profile.studentId}
                    onChange={handleChange}
                  />

                </div>


                <div className="form-group">

                  <label>
                    Year Level
                  </label>

                  <select
                    name="yearLevel"
                    value={profile.yearLevel}
                    onChange={handleChange}
                  >

                    <option>
                      1st Year
                    </option>

                    <option>
                      2nd Year
                    </option>

                    <option>
                      3rd Year
                    </option>

                    <option>
                      4th Year
                    </option>

                  </select>

                </div>

              </div>


              <div className="form-group">

                <label>
                  Program
                </label>

                <input
                  name="program"
                  value={profile.program}
                  onChange={handleChange}
                />

              </div>


              <div className="form-group">

                <label>
                  School
                </label>

                <input
                  name="school"
                  value={profile.school}
                  onChange={handleChange}
                />

              </div>


              <div className="form-grid">

                <div className="form-group">

                  <label>
                    Company
                  </label>

                  <input
                    name="company"
                    value={profile.company}
                    onChange={handleChange}
                  />

                </div>


                <div className="form-group">

                  <label>
                    Department
                  </label>

                  <input
                    name="department"
                    value={profile.department}
                    onChange={handleChange}
                  />

                </div>

              </div>


              <div className="form-grid">

                <div className="form-group">

                  <label>
                    Supervisor
                  </label>

                  <input
                    name="supervisor"
                    value={profile.supervisor}
                    onChange={handleChange}
                  />

                </div>


                <div className="form-group">

                  <label>
                    Position
                  </label>

                  <input
                    name="position"
                    value={profile.position}
                    onChange={handleChange}
                  />

                </div>

              </div>

            </div>


            <div className="modal-footer">

              <button
                className="secondary-btn"
                onClick={() => setShowEdit(false)}
              >
                Cancel
              </button>

              <button
                className="primary-btn"
                onClick={() => setShowEdit(false)}
              >
                Save Changes
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default OJTProfile;