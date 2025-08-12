// pages/EmailVerification.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EmailVerification = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      // .get(`http://localhost:5000/api/auth/verify-email/${token}`)
      .get(`https://generate-test-backend.vercel.app/api/auth/verify-email/${token}`)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || "Verification failed");
      });
  }, [token]);

  return <p>Verifying your email...</p>;
};

export default EmailVerification;
