import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      primaryDark: string;
      secundary: string;
      background: string;
      text: string;
      textSecundary: string;
      error: string;
    };
  }
}
