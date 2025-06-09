import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import GenerateTest from './components/GenerateTest';
import Registration from './components/Registration';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import EmailVerification from './components/EmailVerification';

import { ToastContainer } from 'react-toastify';
import { AuthContext } from './global/AuthContext'
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
   const { user } = useContext(AuthContext);
   const isAdmin = user?.role === "admin"
  
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
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        <Route path="/dashboard" element={isAdmin && <Dashboard />} />
        <Route path="/verify-email/:token" element={<EmailVerification />} />

      </Routes>
    </Router>
  );
}

export default App;

