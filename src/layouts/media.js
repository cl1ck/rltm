import { css } from 'styled-components';

export const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 376,
};

export const queries = Object.keys(sizes).reduce((acc, size) => {
  Object.assign(acc, {
    [size]: `(max-width: ${sizes[size]}px)`,
  });
  return acc;
}, {});

export const styles = Object.keys(sizes).reduce((acc, size) => {
  Object.assign(acc, {
    [size]: (...args) => css`
      @media (max-width: ${sizes[size]}px) {
        ${css(...args)}
      }
    `,
  });
  return acc;
}, {});
