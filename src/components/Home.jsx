import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { API, Pending, Failed, Success } from 'components/API';

const Article = styled.article`
  padding: 4px;
`;

const Home = () => (
  <Article>
    <h1><FormattedMessage id="components.Home.helloWorld" /></h1>
    <API url="https://jsonplaceholder.typicode.com/posts/1" method="get">
      <Pending>...</Pending>
      <Failed>{error => JSON.stringify(error)}</Failed>
      <Success>{({ body }) => body}</Success>
    </API>
  </Article>
);

export default Home;
