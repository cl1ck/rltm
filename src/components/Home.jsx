import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const StyledDiv = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

const Home = () => (
  <StyledDiv>
    <h1>
      <FormattedMessage id="containers.App.login" />
    </h1>
  </StyledDiv>
);

export default Home;
