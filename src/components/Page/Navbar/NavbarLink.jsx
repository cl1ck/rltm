import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten, darken } from 'polished';

const Item = styled.li`
  a {
    text-decoration: none;
    padding: 10px 4px;
    display: block;
  }

  a, a:visited, a:active {
    color: ${({ theme }) => theme.colors.text};
  }

  a:hover {
    background-color: ${({ theme }) => lighten(0.1, theme.colors.primary)};
  }
`;

const ActiveItem = styled.li`
  background-color: ${({ theme }) => darken(0.1, theme.colors.primary)};
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
    <Item><Link to={to}>{children}</Link></Item>
  );
});

NavbarLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavbarLink;
