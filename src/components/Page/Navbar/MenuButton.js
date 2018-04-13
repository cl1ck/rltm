import { styles } from 'layouts/media';
import styled from 'styled-components';

export default styled.button`
  position: absolute;
  left: 0;
  top: 2px;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryText};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? 100 : 0)};
  transition: opacity 0.5;

  &:focus {
    outline:0;
  }

  ${styles.desktop`
    display: none;
  `}
`;
