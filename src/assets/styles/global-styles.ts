import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Poppies&display=swap");






  :root {
    --dark: #313131;
  }

  * {

    margin: 0;
    padding: 0;
    font-family: "Poppies", sans-serif;

  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body, input, select, textarea {
    font-size: 1rem;
    color: var(--dark);

  }


`
