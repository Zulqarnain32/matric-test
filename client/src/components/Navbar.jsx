import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../global/AuthContext";
import { toast } from "react-toastify";
import axios from "axios"
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const isAdmin = user?.role === "admin";

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar); // Toggle based on the previous state
  };

  const closeNav = () => {
    setShowNavbar(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("id");
    toast.success("Logged out successfully", { autoClose: 2000 });
     axios
      // .get("http://localhost:5000/logout", { withCredentials: true }) // Clear Google session
      .get("https://test-generator-backend-alpha.vercel.app/logout", { withCredentials: true }) // Clear Google session
      .then(() => {
        setUser(null);
        window.location.reload();
        navigate("/");
        
      })
      .catch((err) => console.log("Logout error:", err));

    setTimeout(() => {
      navigate("/");
    }, 100);

  };

  // Disable scroll when navbar is open
  useEffect(() => {
    if (showNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showNavbar]);

  return (
    <div className="relative z-50">
      {/* Overlay */}
      {showNavbar && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden" />
      )}

      <div className="bg-navbar w-full sticky top-0 h-[70px] flex justify-between items-center px-10 xs:px-5 z-50">
        <div className="flex items-center text-[25px] text-white">
          <h4 className="font-extrabold">TESTSOLUTION</h4>
        </div>

        <div
          className="block md:hidden cursor-pointer"
          onClick={handleShowNavbar}
        >
          <GiHamburgerMenu className="text-3xl text-white" />
        </div>

        <div
          className={`xs:bg-navbar xs:text-white fixed md:static top-[70px] left-0 w-[150px] md:w-auto h-screen md:h-auto transition-all duration-300 ease-in-out overflow-hidden z-50 md:flex md:items-center md:space-x-4 md:text-[18px] font-bold uppercase tracking-wide ${
            showNavbar ? "left-0" : "left-[-200px]"
          }`}
        >
          <button
            className="absolute top-2 right-2 text-[35px] md:hidden"
            onClick={closeNav}
          >
            <RxCross2 />
          </button>

          <Link
            to="/"
            className="text-white md: block py-4 px-4 border-b md:border-0"
            onClick={closeNav}
          >
            Home
          </Link>
          
          {isAdmin && (
            <Link
              to="/dashboard"
              className="text-white md: block py-4 px-4 border-b md:border-0"
              onClick={closeNav}
            >
              Dashboard
            </Link>
          )}

          {user?.email && (
            <Link
              className=" md:text-white block py-4 px-4 border-b md:border-0"
              onClick={closeNav}
            >
              {(user?.username || user?.displayName)?.split(" ")[0]}

            </Link>
          )}
        

          {user?.email ? (
            <button
              onClick={handleLogout}
              className="bg-blue-500 hover:bg-blue-600 rounded-sm text-white block py-1.5 xs:m-3 px-4 md:border-0 cursor-pointer"
            >
              LOGOUT
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 rounded-sm text-white block py-1.5 xs:m-3 px-4 md:border-0 cursor-pointer"
              onClick={closeNav}
            >
              LOGIN
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
