import { css } from 'styled-components';

export const sizes = {
  desktop: 1024,
  tablet: 768,
};

export const queries = Object.keys(sizes).reduce((acc, size) => {
  Object.assign(acc, {
    [size]: `(min-width: ${sizes[size]}px)`,
  });
  return acc;
}, {});

export const styles = Object.keys(sizes).reduce((acc, size) => {
  Object.assign(acc, {
    [size]: (...args) => css`
      @media (min-width: ${sizes[size]}px) {
        ${css(...args)}
      }
    `,
  });
  return acc;
}, {});
