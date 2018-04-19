import styled from 'react-emotion';

const Highlight = styled('article')`
  background-color: ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.highlightText};
  text-align: justify;
  margin: 20px;
  padding: 4px;
`;
export default Highlight;
