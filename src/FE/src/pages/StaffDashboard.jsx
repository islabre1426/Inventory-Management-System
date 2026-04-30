import { useState } from 'react'

export default function StaffDashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Check stock levels', status: 'pending', dueDate: '2024-05-05' },
    { id: 2, title: 'Update inventory count', status: 'in-progress', dueDate: '2024-05-10' },
    { id: 3, title: 'Organize warehouse', status: 'pending', dueDate: '2024-05-15' }
  ])

  return (
    <div className="container dashboard">
      <h1>Staff Dashboard</h1>
      
      <div className="dashboard-content">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Tasks</h3>
            <p className="stat-number">{tasks.length}</p>
          </div>
          <div className="stat-card">
            <h3>Pending</h3>
            <p className="stat-number">{tasks.filter(t => t.status === 'pending').length}</p>
          </div>
          <div className="stat-card">
            <h3>In Progress</h3>
            <p className="stat-number">{tasks.filter(t => t.status === 'in-progress').length}</p>
          </div>
        </div>

        <div className="tasks-section">
          <h2>Your Tasks</h2>
          <div className="tasks-list">
            {tasks.map(task => (
              <div key={task.id} className={`task-card status-${task.status}`}>
                <div className="task-header">
                  <h3>{task.title}</h3>
                  <span className={`status-badge status-${task.status}`}>
                    {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                  </span>
                </div>
                <p className="task-duedate">Due: {task.dueDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
