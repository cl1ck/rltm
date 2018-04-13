import React from 'react';
import styled from 'styled-components';
import { styles } from 'layouts/media';

const Sidebar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  min-height: 100%;
  width: 100%;

  ${styles.desktop`
    width: 120px;
  `}
`;

export default () => (
  <Sidebar>Sidebar</Sidebar>
);
