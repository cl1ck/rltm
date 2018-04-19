import styledNormalize from 'emotion-normalize';
import { injectGlobal } from 'emotion';

export default () => injectGlobal`
  ${styledNormalize}
 
  html, body {
    height: 100%;
  }
  
  #app {
    height: 100%;
  }
`;
