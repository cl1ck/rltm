import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  ${styledNormalize}
 
  html, body {
    height: 100%;
  }
  
  #app {
    height: 100%;
  }
`;