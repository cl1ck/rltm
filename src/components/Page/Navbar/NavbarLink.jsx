import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import MenuStateProvider from 'bits/menu';

const Item = styled('li')`
  a {
    text-decoration: none;
    padding: 10px 4px;
    display: block;
  }

  a, a:visited, a:active {
    color: ${({ theme }) => theme.colors.primaryText};
  }

  a:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const ActiveItem = styled('li')`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  padding: 10px 4px;
  display: block;
  cursor: default;
`;

const NavbarLink = withRouter(({ children, to, location }) => {
  if (location.pathname === to) {
    return (
      <ActiveItem>{children}</ActiveItem>
    );
  }
  return (
    <MenuStateProvider>
      {({ hideMenu }) => (
        <Item>
          <Link to={to} onClick={hideMenu}>{children}</Link>
        </Item>
      )}
    </MenuStateProvider>
  );
});

NavbarLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavbarLink;
