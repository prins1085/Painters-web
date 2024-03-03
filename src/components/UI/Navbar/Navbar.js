import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const sidebarRef = useRef();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
      if (window.innerWidth >= 769) {
        setIsSidebarOpen(false); // Automatically close the sidebar on window resize if not mobile
      }
    };
    window.addEventListener("resize", handleResize);

    // Function to detect clicks outside the sidebar
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside); // Clean up
    };
  }, []);
  const menuItems = (
    <ul>
      <li>
        <Link to="/" onClick={closeSidebar}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/works" onClick={closeSidebar}>
          Works
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={closeSidebar}>
          About
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeSidebar}>
        72DragonsServices
      </Link>
      {isMobile && (
        <button className="burger" onClick={toggleSidebar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      )}
      {isMobile ? (
        <div
          className={`sidebar ${isSidebarOpen ? "open" : ""}`}
          ref={sidebarRef}
        >
          <button className="close-sidebar" onClick={closeSidebar}>
            X
          </button>
          {menuItems}
        </div>
      ) : (
        <div className="menu-desktop">{menuItems}</div>
      )}
    </nav>
  );
}

export default Navbar;
