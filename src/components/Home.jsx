import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'react-emotion';
import { API, Pending, Failed, Success } from 'components/API';
import { PulseLoader } from 'react-spinners';
import Highlight from 'styles/Highlight';

const Article = styled('article')`
  padding: 4px;
`;

const Home = () => (
  <Article>
    <h1><FormattedMessage id="components.Home.helloWorld" /></h1>
    <h2>Success:</h2>
    <API url="https://jsonplaceholder.typicode.com/posts/1" method="get">
      <Pending><PulseLoader size={9} /></Pending>
      <Failed>{error => JSON.stringify(error)}</Failed>
      <Success>
        {({ body }) => (
          <Highlight>{body}</Highlight>
        )}
      </Success>
    </API>
    <h2>Error:</h2>
    <API url="https://jsonplsaceholder.typicode.com/posts/1" method="get">
      <Pending><PulseLoader size={9} /></Pending>
      <Failed>{error => JSON.stringify(error)}</Failed>
      <Success>{({ body }) => body}</Success>
    </API>
  </Article>
);

export default Home;
