import React, { useState,useNavigate,useEffect } from "react";
import { Link } from "react-router-dom";
import YogarjunLogo from "../assets/YogarjunLogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  // Load user from localStorage
  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //   }
  // }, []);
  useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
    try {
      setUser(JSON.parse(storedUser));
    } catch (err) {
      console.warn("Failed to parse user from localStorage", err);
      setUser(null);
    }
  } else {
    setUser(null);
  }
}, []);

  // // Handle logout
  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   setUser(null);
  //   setMenuOpen(false);
  //   navigate("/profile");
  // };


  // Toggle menu open/close
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>

      <div id="wrapper">
        {/* header begin */}
        <header className="header-fullwidth menu-expand transparent header-mobile">
          <div className="container-fluid">
            <div className="row-fluid">
              <div className="col-md-12">

                {/* Logo begin */}

                {/* <div id="logo">
                  <Link to="/">
                    <img className="logo" src={YogarjunLogo} alt="Logo" />
                  </Link>
                </div> */}


                <div id="logo" >
                  <Link to="/" className="logo-text" id="setlogo">
                    Hotel Yogarjun Palace
                  </Link>
                </div>

                {/* Logo close */}


                {/* small button begin */}
                <div
                  id="mo-button-open"
                  className="mo-bo-s1"
                  onClick={handleMenuToggle}
                  style={{ cursor: "pointer" }}
                >
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                {/* small button close */}
              </div>
            </div>
          </div>
        </header>
        {/* header close */}

        {/* menu overlay begin */}
        {/* <div
          id="menu-overlay"
          className={`slideDown ${menuOpen ? "open" : ""}`}
          style={{
            display: menuOpen ? "block" : "none",
            transition: "all 0.3s ease-in-out",
          }}
        > */}
        <div
          id="menu-overlay"
          className={`menu-overlay ${menuOpen ? "open" : ""}`}
        >
          <div className="container-fluid">
            <div className="row-fluid">
              <div className="col-md-12">
                {/* Close button */}
                <div
                  id="mo-button-close"
                  onClick={handleMenuToggle}
                  style={{ cursor: "pointer" }}
                >
                  <div className="line-1"></div>
                  <div className="line-2"></div>
                </div>

                <div className="pt80 pb80">
                  <div className="mo-nav text-center">



                    {/* Drawer Logo begin */}

                    {/* <Link to="/">
                      <img className="logo" src={YogarjunLogo} alt="Logo" />
                    </Link> */}

                    <div id="logo">
                      <Link to="/" onClick={() => setMenuOpen(false)} className="logo-text">
                        Hotel Yogarjun Palace
                      </Link>
                    </div>

                    {/* Drawer Logo close */}

                    <div className="spacer-single"></div>

                    {/* main menu */}
                    {/* main menu */}
                    <ul id="mo-menu">
                      <li>
                        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                      </li>
                      <li>
                        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                      </li>
                      <li>
                        <Link to="/rooms" onClick={() => setMenuOpen(false)}>Rooms</Link>
                      </li>
                      <li>
                        <Link to="/booking" onClick={() => setMenuOpen(false)}>Booking</Link>
                      </li>
                    
                      <li>
                        <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
                      </li>
                      <li>
                        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                      </li>
                      <li>
                        <Link to="/Profile" onClick={() => setMenuOpen(false)}> My Profile</Link>
                      </li>
                      <li>
                        <Link to="/UserProfile" onClick={() => setMenuOpen(false)}>User Profile </Link>
                      </li>
                    </ul>

                    {/* main menu close */}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* menu overlay close */}
      </div>

    </>
  );
};

export default Header;
