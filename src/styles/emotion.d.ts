import '@emotion/react';
import { ColorsType } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsType;
  }
}
