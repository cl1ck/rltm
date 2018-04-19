import React from 'react';
import styled from 'react-emotion';

const Highlight = styled('article')`
  background-color: ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.highlightText};
  text-align: justify;
  margin: 20px;
  padding: 4px;
`;

const Home = () => (
  <Highlight>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque leo eget dapibus
porta. Fusce semper purus metus, et hendrerit orci consectetur et. Aliquam fermentum porttitor diam
sit amet pulvinar. Sed et magna eu est ornare tempor eu non dui. Integer nisi ante, molestie gravida
risus eu, ornare faucibus augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sem
risus, cursus eu metus nec, suscipit egestas nunc. Nulla vitae vehicula nulla. Etiam molestie erat
sit amet tellus euismod, mollis pharetra velit iaculis. Nulla ante tortor, malesuada vitae convallis
eget, vestibulum at velit. Phasellus ut augue sapien.
  </Highlight>
);

export default Home;
