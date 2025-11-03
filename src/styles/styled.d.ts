import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    color: {
      primary: string;
      secondary: string;
      tertiary: string;

      white: string;
      black: string;
      gray: string;

      success: string;
      error: string;
      info: string;

      text: string;
    },
  }; 
}