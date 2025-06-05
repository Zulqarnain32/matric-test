import { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
  const [users, setUsers] = useState([])
 

  useEffect(() => {
    // axios.get("http://localhost:5000/api/auth/dashboard")
    axios.get("https://test-generator-backend-alpha.vercel.app/api/auth/dashboard")
      .then(res => {
        console.log("dashboard page", res)
        setUsers(res.data)
      })
      .catch(err => {
        console.log("err is", err)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-text mb-6">Admin Dashboard</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-text mb-4">All Registered Users (Role: user)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              users
                .filter(user => user.role === "user")
                .map((user, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
                    <h3 className="text-lg font-medium text-text">{user.displayName || user.username}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-sm text-gray-600">{user?.loginCount}</p>
                    <p className="text-sm text-gray-600"> {user?.lastLoginDate ? new Date(user.lastLoginDate).toLocaleString() : "N/A"}</p>
                  </div>
                ))
            }
            {users.filter(user => user.role === "user").length === 0 && (
              <p className="text-gray-500 col-span-full">No users found with role 'user'.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
