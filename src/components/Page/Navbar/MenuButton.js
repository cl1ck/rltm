import { styles } from 'layouts/media';
import styled from 'styled-components';

export default styled.button`
  position: absolute;
  left: 0;
  top: 2px;
  cursor: pointer;
  visibility: hidden;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryText};
  transition: opacity 0.5;

  &:focus {
    outline:0;
  }

  ${styles.tablet`
    opacity: ${({ visible }) => (visible ? 100 : 0)};
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  `}
`;
