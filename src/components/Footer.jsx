import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 30px;
`;

export default () => (
  <Footer>Footer</Footer>
);
