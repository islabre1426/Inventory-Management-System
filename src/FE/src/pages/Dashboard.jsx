import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="container dashboard">
      <div className="dashboard-header">
        <h1>Inventory Management System Showcase</h1>
        <p>(ONLY FOR SHOWCASING DESIGN, WON'T BE INCLUDED IN THE FINAL PRODUCT)</p>
      </div>

      <div className="dashboard-section">
        <h2>After logging in, where to see?</h2>
        <div className="dashboard-grid">
          <div className="dashboard-card" onClick={() => navigate('/admin')}>
            <h3>Admin Dashboard</h3>
          </div>
          <div className="dashboard-card" onClick={() => navigate('/staff')}>
            <h3>Staff Dashboard</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
