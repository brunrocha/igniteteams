import 'styled-components';
import theme from '../theme';

declare module 'styled-components' {
  type ThemeType = typeof theme; //define o tema com base nos atributos;

  export interface DefaultTheme extends ThemeType {} //inclui o tema criado na tipagem padrão
}

