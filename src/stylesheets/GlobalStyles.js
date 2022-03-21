import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --blue-twitter: #1da1f2;
  --blue-hover-twitter: #1a91da;
  --gray-twitter: #0f1419;
  --hover: rgba(15, 20, 25, 10%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: 0;
}

body {
  color: var(--gray-twitter);
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.Home {
  display: flex;
  justify-content: center;
  height: 100vh;
  max-width: 1250px;
  margin: 0 auto;
}

`;
