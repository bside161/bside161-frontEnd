import '@emotion/react';
import { ColorsType } from './src/styles/theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsType;
    typography: TypoType;
  }
}
