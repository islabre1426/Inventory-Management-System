import { useNavigate } from 'react-router-dom'

export default function Showcase() {
  const navigate = useNavigate()

  return (
    <div className="container showcase">
      <div className="showcase-header">
        <h1>Inventory Management System Showcase</h1>
        <p>(ONLY FOR SHOWCASING DESIGN, WON'T BE INCLUDED IN THE FINAL PRODUCT)</p>
      </div>

      <div className="showcase-section">
        <h2>Navigate to...</h2>
        <div className="showcase-grid">
          <div className="showcase-card" onClick={() => navigate('/login')}>
            <h3>Login Page</h3>
          </div>
          <div className="showcase-card" onClick={() => navigate('/signup')}>
            <h3>Admin Dashboard</h3>
          </div>
          <div className="showcase-card" onClick={() => navigate('/admin')}>
            <h3>Staff Dashboard</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
