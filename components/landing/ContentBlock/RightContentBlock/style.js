import styled from '@emotion/styled';

import media from '~/components/globalStyles/media';

export const RightBlockContainer = styled.article`
  padding-top: 9rem;

  ${media.lg} {
    padding-right: 1.5rem;
  }
`;

export const ContentWrapper = styled.section`
  margin-top: 1rem;

  h1 {
    font-weight: 700;
    font-size: 2.1rem;
    text-align: center;
    word-break: keep-all;
  }
  p {
    margin-top: 1rem;
    font-weight: 400;
    font-size: 1.3rem;
    text-align: center;
    word-break: keep-all;
    line-height: 1.4;
    padding: 0 3rem;

    ${media.sm} {
      padding: 0 2.2rem;
    }
    ${media.md} {
      padding: 0 4rem;
    }
    ${media.lg} {
      padding: 0 2.2rem;
    }
    ${media.xl} {
      padding: 0 4rem;
    }
  }
  ${media.lg} {
    margin-top: initial;
    padding-left: 4.5rem;
  }
`;
