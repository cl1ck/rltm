import React from 'react';
import styled from 'styled-components';
import media from 'layouts/media';

const Sidebar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 100%;
  width: 120px;

  ${media.tablet`
    width: 100%;
  `}
`;

export default () => (
  <Sidebar>Sidebar</Sidebar>
);
