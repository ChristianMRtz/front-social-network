import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding: 20px;
  border-right: 1px solid #ddd;
  flex: 0.2;
  min-width: 255px;
  > .twitter-logo {
    margin: 6px 3px;
    width: 40px;
    height: 40px;
    fill: var(--blue-twitter);
    cursor: pointer;
    :hover {
      background-color: rgba(29, 155, 240, 10%);
      border-radius: 50%;
    }
  }
  > Button {
    margin-top: 20px;
    background-color: var(--blue-twitter) !important;
    border: none !important;
    color: #fff !important;
    font-weight: 800 !important;
    text-transform: inherit !important;
    height: 46px !important;
    padding: 0 30px !important;
    border-radius: 9999px !important;
    :hover {
      background-color: var(--blue-hover-twitter) !important;
    }
  }
`;

export const IconSidebar = styled.div`
  display: flex;
  align-items: center;
  .bar-icon {
    display: flex;
    flex-direction: row;
    padding: 12px 18px 12px 12px;
    gap: 20px;
    cursor: pointer;
  }
  .bar-icon:hover {
    background-color: var(--hover);
    transform: color 100ms ease-out;
    border-radius: 9999px;
  }
  .bar-icon p {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: normal;
    color: var(--gray-twitter);
  }
  .bar-icon .MuiSvgIcon-root {
    width: 30px;
    height: 30px;
  }
  ${(props) =>
    props.active &&
    css`
      color: black;
      font-weight: bold;
    `}
`;
