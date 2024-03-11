import React from "react";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Add your AdminLTE header content here */}
      </nav>

      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Add your AdminLTE sidebar content here */}
      </aside>

      <div className="content-wrapper">
        <Container fluid>{children}</Container>
      </div>

      <footer className="main-footer">
        {/* Add your AdminLTE footer content here */}
      </footer>
    </div>
  );
};

export default Layout;
