import React from 'react';
import ResponsiveNavbar from 'components/Page/Navbar/ResponsiveNavbar';
import Link from 'components/Page/Navbar/NavbarLink';

const Navbar = () => (
  <ResponsiveNavbar title="Navbar">
    <Link to="/">Home</Link>
    <Link to="/nav">With Navbar</Link>
    <Link to="/side">With Sidebar</Link>
  </ResponsiveNavbar>
);

export default Navbar;
