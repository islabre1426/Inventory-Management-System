import { useState } from 'react'
import ChangePasswordModal from '../components/ChangePasswordModal'

export default function AdminDashboard() {
  const [items, setItems] = useState([
    { id: 1, name: 'Laptop', quantity: 10, price: 50000 },
    { id: 2, name: 'Mouse', quantity: 50, price: 250 },
    { id: 3, name: 'Keyboard', quantity: 30, price: 800 }
  ])
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)

  return (
    <div className="container dashboard">
      <h1>Admin Dashboard</h1>
      
      <div className="dashboard-content">
        <div className="dashboard-top">
          <button 
            className="btn-change-password"
            onClick={() => setIsPasswordModalOpen(true)}
          >
            Change Password
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Items</h3>
            <p className="stat-number">{items.length}</p>
          </div>
          <div className="stat-card">
            <h3>Total Quantity</h3>
            <p className="stat-number">{items.reduce((sum, item) => sum + item.quantity, 0)}</p>
          </div>
          <div className="stat-card">
            <h3>Total Value</h3>
            <p className="stat-number">${items.reduce((sum, item) => sum + (item.quantity * item.price), 0).toLocaleString()}</p>
          </div>
        </div>

        <div className="inventory-section">
          <h2>Inventory Items</h2>
          <table className="inventory-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Value</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${(item.quantity * item.price).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ChangePasswordModal 
        isOpen={isPasswordModalOpen} 
        onClose={() => setIsPasswordModalOpen(false)}
      />
    </div>
  )
}
