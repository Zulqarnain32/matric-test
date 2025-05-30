import Home from './components/Home';
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import GenerateTest from './components/GenerateTest';

import { ToastContainer } from 'react-toastify';
import { AuthContext } from './global/AuthContext'
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PDFList from './components/PDFList';

function App() {
   const { user } = useContext(AuthContext);
   console.log("user is ", user)
   const isAdmin = user?.role === "admin"
   console.log(isAdmin)
  
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
        <Route path="/pdflist" element={ isAdmin ? <PDFList /> : <Login/>} />

      </Routes>
    </Router>
  );
}

export default App;

