import { css } from "styled-components";

export const globalCSS = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  :root {
    --blue-twitter: #1da1f2;
    --blue-hover-twitter: #1a91da;
    --gray-twitter: #0f1419;
    --hover: rgba(15, 20, 25, 10%);
  }

  * {
    font-family: "Poppins", sans-serif;
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
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: "Poppins", sans-serif;
  }

  .Home {
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: center;
    height: 100vh;
    max-width: 1250px;
    margin: 0 auto;
  }
`;
