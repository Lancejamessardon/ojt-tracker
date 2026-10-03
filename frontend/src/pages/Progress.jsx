import { useState } from "react";

const skills = [
  {
    name: "Frontend Development",
    category: "Technical",
    progress: 85,
    level: "Advanced",
  },
  {
    name: "React.js",
    category: "Technical",
    progress: 70,
    level: "Intermediate",
  },
  {
    name: "UI/UX Design",
    category: "Design",
    progress: 65,
    level: "Intermediate",
  },
  {
    name: "Database Management",
    category: "Technical",
    progress: 55,
    level: "Beginner",
  },
  {
    name: "Communication",
    category: "Soft Skill",
    progress: 80,
    level: "Advanced",
  },
  {
    name: "Problem Solving",
    category: "Soft Skill",
    progress: 75,
    level: "Intermediate",
  },
];

const milestones = [
  {
    id: 1,
    title: "OJT Orientation Completed",
    date: "August 1, 2026",
    status: "Completed",
  },
  {
    id: 2,
    title: "First Week Completed",
    date: "August 7, 2026",
    status: "Completed",
  },
  {
    id: 3,
    title: "160 Hours Completed",
    date: "August 28, 2026",
    status: "Completed",
  },
  {
    id: 4,
    title: "320 Hours Completed",
    date: "September 30, 2026",
    status: "Completed",
  },
  {
    id: 5,
    title: "Final OJT Evaluation",
    date: "October 30, 2026",
    status: "Upcoming",
  },
];

const weeklyProgress = [
  {
    week: "Week 1",
    hours: 40,
  },
  {
    week: "Week 2",
    hours: 40,
  },
  {
    week: "Week 3",
    hours: 40,
  },
  {
    week: "Week 4",
    hours: 40,
  },
  {
    week: "Week 5",
    hours: 40,
  },
  {
    week: "Week 6",
    hours: 40,
  },
  {
    week: "Week 7",
    hours: 40,
  },
  {
    week: "Week 8",
    hours: 40,
  },
];

function Progress() {
  const [activeSkill, setActiveSkill] = useState("All");

  const completedHours = 320;
  const requiredHours = 480;

  const overallProgress = Math.round(
    (completedHours / requiredHours) * 100
  );

  const remainingHours = requiredHours - completedHours;

  const filteredSkills =
    activeSkill === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeSkill);

  return (
    <div className="progress-page">
      {/* Header */}
      <div className="page-header">
        <div>
          <div className="breadcrumb">
            OJT <span>/</span> Progress
          </div>

          <h1>My Progress</h1>

          <p>
            Track your OJT completion, skills, and milestones.
          </p>
        </div>
      </div>

      {/* Main Progress Card */}
      <div className="overall-progress-card">
        <div className="overall-progress-left">
          <div className="progress-circle">
            <div className="progress-circle-inner">
              <strong>{overallProgress}%</strong>
              <span>Completed</span>
            </div>
          </div>

          <div className="overall-progress-info">
            <span className="progress-label">
              Overall OJT Progress
            </span>

            <h2>
              {completedHours}{" "}
              <small>/ {requiredHours} hours</small>
            </h2>

            <p>
              You have completed {completedHours} hours of your
              required {requiredHours} OJT hours.
            </p>

            <div className="large-progress-bar">
              <div
                className="large-progress-fill"
                style={{
                  width: `${overallProgress}%`,
                }}
              ></div>
            </div>

            <div className="progress-date-info">
              <span>Started: August 1, 2026</span>
              <span>Target: October 30, 2026</span>
            </div>
          </div>
        </div>

        <div className="overall-progress-stats">
          <div>
            <span>Completed</span>
            <strong>{completedHours}h</strong>
          </div>

          <div>
            <span>Remaining</span>
            <strong>{remainingHours}h</strong>
          </div>

          <div>
            <span>Completion</span>
            <strong>{overallProgress}%</strong>
          </div>
        </div>
      </div>

      {/* Progress Stats */}
      <div className="progress-stat-grid">
        <div className="progress-stat-card">
          <div className="progress-stat-icon">
            ⏱️
          </div>

          <div>
            <span>Total Hours</span>
            <strong>320h</strong>
            <small>of 480 required</small>
          </div>
        </div>

        <div className="progress-stat-card">
          <div className="progress-stat-icon">
            📅
          </div>

          <div>
            <span>OJT Days</span>
            <strong>40</strong>
            <small>working days</small>
          </div>
        </div>

        <div className="progress-stat-card">
          <div className="progress-stat-icon">
            🎯
          </div>

          <div>
            <span>Tasks Completed</span>
            <strong>12</strong>
            <small>out of 18 tasks</small>
          </div>
        </div>

        <div className="progress-stat-card">
          <div className="progress-stat-icon">
            ⭐
          </div>

          <div>
            <span>Average Progress</span>
            <strong>76%</strong>
            <small>skill development</small>
          </div>
        </div>
      </div>

      {/* Weekly Progress */}
      <div className="progress-section-card">
        <div className="section-card-header">
          <div>
            <h2>Weekly Progress</h2>
            <p>OJT hours completed per week.</p>
          </div>

          <span className="hours-badge">
            320 Total Hours
          </span>
        </div>

        <div className="weekly-chart">
          {weeklyProgress.map((item) => {
            const height = (item.hours / 40) * 100;

            return (
              <div className="chart-column" key={item.week}>
                <div className="chart-value">
                  {item.hours}h
                </div>

                <div className="chart-bar-wrapper">
                  <div
                    className="chart-bar"
                    style={{
                      height: `${height}%`,
                    }}
                  ></div>
                </div>

                <span>{item.week}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills */}
      <div className="progress-section-card">
        <div className="section-card-header">
          <div>
            <h2>Skills Development</h2>
            <p>
              Monitor your technical and professional skills.
            </p>
          </div>

          <div className="skill-filters">
            {["All", "Technical", "Design", "Soft Skill"].map(
              (filter) => (
                <button
                  key={filter}
                  className={
                    activeSkill === filter ? "active" : ""
                  }
                  onClick={() => setActiveSkill(filter)}
                >
                  {filter}
                </button>
              )
            )}
          </div>
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-card-header">
                <div>
                  <h3>{skill.name}</h3>
                  <span>{skill.category}</span>
                </div>

                <strong>{skill.progress}%</strong>
              </div>

              <div className="skill-progress-bar">
                <div
                  className="skill-progress-fill"
                  style={{
                    width: `${skill.progress}%`,
                  }}
                ></div>
              </div>

              <div className="skill-card-footer">
                <span>Current Level</span>

                <strong>{skill.level}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="progress-section-card">
        <div className="section-card-header">
          <div>
            <h2>OJT Milestones</h2>
            <p>
              Important achievements throughout your internship.
            </p>
          </div>
        </div>

        <div className="milestone-list">
          {milestones.map((milestone, index) => (
            <div
              className="milestone-item"
              key={milestone.id}
            >
              <div className="milestone-line">
                <div
                  className={`milestone-dot ${
                    milestone.status === "Completed"
                      ? "completed"
                      : "upcoming"
                  }`}
                >
                  {milestone.status === "Completed"
                    ? "✓"
                    : "○"}
                </div>

                {index !== milestones.length - 1 && (
                  <div
                    className={`milestone-connector ${
                      milestone.status === "Completed"
                        ? "completed"
                        : ""
                    }`}
                  ></div>
                )}
              </div>

              <div className="milestone-content">
                <div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.date}</p>
                </div>

                <span
                  className={`milestone-status ${
                    milestone.status === "Completed"
                      ? "completed"
                      : "upcoming"
                  }`}
                >
                  {milestone.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Progress;