import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components'

export const GlobalStyle: GlobalStyleComponent<
  object,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(0) }
    50% { transform: scale(4) }
  }
`
