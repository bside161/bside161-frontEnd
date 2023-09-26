import { css } from '@emotion/react';

export const globalStyles = css`
  #root {
    height: 100vh;
    width: 100%;
    margin: 0 auto;
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    /* min-width: 320px; */
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }

  * {
    font-family: 'SUIT Variable', sans-serif;
  }
`;
