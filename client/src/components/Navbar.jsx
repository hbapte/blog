import React, { useState } from "react";
import { FaBars, FaBell } from "react-icons/fa";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const AppNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);
  const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const toggleNotificationsDropdown = () => {
    setShowNotificationsDropdown(!showNotificationsDropdown);
  };

  const toggleAvatarDropdown = () => {
    setShowAvatarDropdown(!showAvatarDropdown);
  };

  return (
    <Navbar bg="light" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Toggle onClick={toggleNavbar} aria-controls="basic-navbar-nav">
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/">Team</Nav.Link>
            <Nav.Link href="/">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* Right elements */}
        <div className="d-flex align-items-center ms-auto me-lg-0"> {/* Adjusted the classes */}
          <a
            className="text-reset me-3 dropdown-toggle hidden-arrow"
            href="/"
            id="navbarDropdownMenuLink"
            onClick={toggleNotificationsDropdown}
            aria-expanded={showNotificationsDropdown}
          >
            < FaBell />
            <span className="badge rounded-pill badge-notification bg-danger">1</span>
          </a>
          {showNotificationsDropdown && (
            <ul
              className="dropdown-menu dropdown-menu-start" 
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="/">Some news</a>
              </li>
              <li>
                <a className="dropdown-item" href="/">Another news</a>
              </li>
              <li>
                <a className="dropdown-item" href="/">Something else here</a>
              </li>
            </ul>
          )}

          <NavDropdown
            title={<img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="Avatar" height="25" />}
            id="basic-nav-dropdown"
            show={showAvatarDropdown}
            onClick={toggleAvatarDropdown}
          >
            <NavDropdown.Item href="/">My profile</NavDropdown.Item>
            <NavDropdown.Item href="/">Settings</NavDropdown.Item>
            <NavDropdown.Item href="/">Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
