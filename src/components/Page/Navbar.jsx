import React from 'react';
import ResponsiveNavbar from 'components/Page/Navbar/ResponsiveNavbar';
import Link from 'components/Page/Navbar/NavbarLink';

const Navbar = () => (
  <ResponsiveNavbar>
    <Link to="/">Home</Link>
    <Link to="/page1">Page 1</Link>
  </ResponsiveNavbar>
);

export default Navbar;
