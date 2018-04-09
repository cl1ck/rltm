import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from 'layouts/media';

const Navbar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 200px;
  height: 100%;

  ${media.tablet`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s 0s, visibility 0s 0.2s;
  `}
`;

export default () => (
  <Navbar>
    <div>Navbar</div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/nav">With Navbar</Link></li>
      <li><Link to="/side">With Sidebar</Link></li>
    </ul>
  </Navbar>
);
