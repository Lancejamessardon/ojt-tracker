import { useMemo, useState } from "react";

const initialTasks = [
  {
    id: 1,
    title: "Create Login Page",
    description: "Build the login interface for the OJT Tracker system.",
    priority: "High",
    deadline: "October 5, 2026",
    progress: 80,
    status: "In Progress",
    category: "Frontend",
  },
  {
    id: 2,
    title: "Design Dashboard",
    description: "Create a modern dashboard layout for the internship system.",
    priority: "High",
    deadline: "October 7, 2026",
    progress: 45,
    status: "In Progress",
    category: "UI Design",
  },
  {
    id: 3,
    title: "Prepare Database Structure",
    description: "List the required tables and relationships for the system.",
    priority: "Medium",
    deadline: "October 10, 2026",
    progress: 0,
    status: "To Do",
    category: "Backend",
  },
  {
    id: 4,
    title: "Create Attendance UI",
    description: "Build the frontend interface for attendance monitoring.",
    priority: "Medium",
    deadline: "October 12, 2026",
    progress: 0,
    status: "To Do",
    category: "Frontend",
  },
  {
    id: 5,
    title: "Setup React Router",
    description: "Configure routes for the OJT Tracker pages.",
    priority: "Low",
    deadline: "October 2, 2026",
    progress: 100,
    status: "Completed",
    category: "Development",
  },
  {
    id: 6,
    title: "Create Project Structure",
    description: "Organize the React project folders and components.",
    priority: "Low",
    deadline: "October 1, 2026",
    progress: 100,
    status: "Completed",
    category: "Development",
  },
];

function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("All");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    deadline: "",
    progress: 0,
    status: "To Do",
    category: "General",
  });

  const summary = useMemo(() => {
    return {
      total: tasks.length,
      todo: tasks.filter((task) => task.status === "To Do").length,
      progress: tasks.filter((task) => task.status === "In Progress").length,
      completed: tasks.filter((task) => task.status === "Completed").length,
    };
  }, [tasks]);

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((task) => task.priority === filter);

  const getTasksByStatus = (status) => {
    return filteredTasks.filter((task) => task.status === status);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateTask = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: formData.title,
      description:
        formData.description || "No description provided.",
      priority: formData.priority,
      deadline: formData.deadline || "No deadline",
      progress: Number(formData.progress),
      status: formData.status,
      category: formData.category,
    };

    setTasks((prev) => [newTask, ...prev]);

    setFormData({
      title: "",
      description: "",
      priority: "Medium",
      deadline: "",
      progress: 0,
      status: "To Do",
      category: "General",
    });

    setShowModal(false);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== taskId) {
          return task;
        }

        return {
          ...task,
          status: newStatus,
          progress:
            newStatus === "Completed"
              ? 100
              : newStatus === "To Do"
              ? 0
              : task.progress === 0
              ? 25
              : task.progress,
        };
      })
    );
  };

  const getPriorityClass = (priority) => {
    return priority.toLowerCase();
  };

  const getStatusClass = (status) => {
    if (status === "To Do") return "todo";
    if (status === "In Progress") return "in-progress";
    return "completed";
  };

  const renderTaskCard = (task) => (
    <div className="task-card" key={task.id}>
      <div className="task-card-top">
        <span className={`task-priority ${getPriorityClass(task.priority)}`}>
          {task.priority}
        </span>

        <button className="task-menu-button">
          ⋮
        </button>
      </div>

      <h3>{task.title}</h3>

      <p className="task-description">
        {task.description}
      </p>

      <div className="task-category">
        <span>🏷️</span>
        {task.category}
      </div>

      <div className="task-deadline">
        <span>📅</span>
        <span>{task.deadline}</span>
      </div>

      <div className="task-progress-section">
        <div className="task-progress-header">
          <span>Progress</span>
          <strong>{task.progress}%</strong>
        </div>

        <div className="task-progress-bar">
          <div
            className="task-progress-fill"
            style={{ width: `${task.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="task-card-footer">
        <span className={`task-status ${getStatusClass(task.status)}`}>
          {task.status}
        </span>

        <select
          value={task.status}
          onChange={(e) =>
            updateTaskStatus(task.id, e.target.value)
          }
          className="task-status-select"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className="tasks-page">
      {/* Header */}
      <div className="page-header">
        <div>
          <div className="breadcrumb">
            OJT <span>/</span> Tasks
          </div>

          <h1>My Tasks</h1>

          <p>
            Manage and monitor your internship tasks and activities.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowModal(true)}
        >
          <span>＋</span>
          New Task
        </button>
      </div>

      {/* Summary */}
      <div className="task-summary-grid">
        <div className="task-summary-card">
          <div className="task-summary-icon total">
            📋
          </div>

          <div>
            <span>Total Tasks</span>
            <strong>{summary.total}</strong>
          </div>
        </div>

        <div className="task-summary-card">
          <div className="task-summary-icon todo">
            📝
          </div>

          <div>
            <span>To Do</span>
            <strong>{summary.todo}</strong>
          </div>
        </div>

        <div className="task-summary-card">
          <div className="task-summary-icon progress">
            🔄
          </div>

          <div>
            <span>In Progress</span>
            <strong>{summary.progress}</strong>
          </div>
        </div>

        <div className="task-summary-card">
          <div className="task-summary-icon completed">
            ✓
          </div>

          <div>
            <span>Completed</span>
            <strong>{summary.completed}</strong>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="tasks-toolbar">
        <div>
          <h2>Task Board</h2>
          <p>Track your current internship activities.</p>
        </div>

        <div className="task-filters">
          {["All", "High", "Medium", "Low"].map((item) => (
            <button
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Kanban Board */}
      <div className="task-board">
        {/* TO DO */}
        <div className="task-column">
          <div className="task-column-header">
            <div className="column-title">
              <span className="column-dot todo-dot"></span>
              <h3>To Do</h3>
              <span className="column-count">
                {getTasksByStatus("To Do").length}
              </span>
            </div>
          </div>

          <div className="task-column-content">
            {getTasksByStatus("To Do").length > 0 ? (
              getTasksByStatus("To Do").map(renderTaskCard)
            ) : (
              <div className="empty-task">
                No tasks here.
              </div>
            )}
          </div>
        </div>

        {/* IN PROGRESS */}
        <div className="task-column">
          <div className="task-column-header">
            <div className="column-title">
              <span className="column-dot progress-dot"></span>
              <h3>In Progress</h3>
              <span className="column-count">
                {getTasksByStatus("In Progress").length}
              </span>
            </div>
          </div>

          <div className="task-column-content">
            {getTasksByStatus("In Progress").length > 0 ? (
              getTasksByStatus("In Progress").map(renderTaskCard)
            ) : (
              <div className="empty-task">
                No tasks here.
              </div>
            )}
          </div>
        </div>

        {/* COMPLETED */}
        <div className="task-column">
          <div className="task-column-header">
            <div className="column-title">
              <span className="column-dot completed-dot"></span>
              <h3>Completed</h3>
              <span className="column-count">
                {getTasksByStatus("Completed").length}
              </span>
            </div>
          </div>

          <div className="task-column-content">
            {getTasksByStatus("Completed").length > 0 ? (
              getTasksByStatus("Completed").map(renderTaskCard)
            ) : (
              <div className="empty-task">
                No tasks here.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* New Task Modal */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="task-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <h2>Create New Task</h2>
                <p>Add a new internship task.</p>
              </div>

              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleCreateTask}>
              <div className="form-group">
                <label>Task Title</label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter task title"
                  required
                />
              </div>

              <div className="form-group">
                <label>Description</label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the task..."
                  rows="4"
                ></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Priority</label>

                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Status</label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">
                      In Progress
                    </option>
                    <option value="Completed">
                      Completed
                    </option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Deadline</label>

                  <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Progress (%)</label>

                  <input
                    type="number"
                    name="progress"
                    min="0"
                    max="100"
                    value={formData.progress}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Category</label>

                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g. Frontend, Backend, Documentation"
                />
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-button"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;