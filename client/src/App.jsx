import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import GenerateTest from './components/GenerateTest';
import Registration from './components/Registration';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import EmailVerification from './components/EmailVerification';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from './global/AuthContext'
import { useContext } from 'react';
import axios from "axios"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
   const { user } = useContext(AuthContext);
   const isAdmin = user?.role === "admin"


   axios.get("https://generate-test-backend.vercel.app/me", {
  withCredentials: true
}).then((res) => {
  console.log("app res ",res)
}).catch(err => {
  console.log(" app error is ", err)
})

  
  return (
    <Router>
      <ToastContainer 
        position="top-center" 
        autoClose={2000}
      />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/generate-test" element={ user ? <GenerateTest/>:<Login/>} />
        {/* <Route path="/generate-test" element={<GenerateTest/>} /> */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        <Route path="/dashboard" element={isAdmin && <Dashboard />} />
        <Route path="/verify-email/:token" element={<EmailVerification />} />

      </Routes>
    </Router>
  );
}

export default App;

