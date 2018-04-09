import { css } from 'styled-components';

const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 376,
};

const media = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = (...args) => css`
    @media (max-width: ${sizes[size]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;
