import { Global, css } from '@emotion/react';

import Resets from './_Resets';
import FontFace from './_FontFace';
import Variables from './_Variables';
import media from './media';

const GlobalStyles = props => (
  <>
    <Global styles={Resets} />
    <Global styles={Variables} />
    <Global styles={FontFace} />
    <Global
      {...props}
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        html {
          font-family: sans-serif;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;

          ${media.xs} {
            font-size: 14.5px;
          }
          ${media.sm} {
            font-size: 15px;
          }
          ${media.md} {
            font-size: 15px;
          }
          ${media.lg} {
            font-size: 15.5px;
          }
          ${media.xl} {
            font-size: 16px;
          }
          ${media.xxl} {
            font-size: 16px;
          }
        }

        body {
          // TODO: 폰트 렌더링 최적화하기
          font-family: 'Noto Sans KR', 'Roboto', 'HelveticaNeue',
            'Helvetica Neue', sans-serif;
        }
      `}
    />
  </>
);

export default GlobalStyles;
