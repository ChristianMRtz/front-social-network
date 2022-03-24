import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  flex: 0.65;
  border-right: 1px solid #ddd;
  overflow-y: scroll;
  box-sizing: border-box;
  --ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .idDiv {
    cursor: pointer;
    :hover {
      background-color: rgba(0, 0, 0, 3%);
    }
  }
  .lds-ripple {
    margin-left: 40%;
    margin-top: 20%;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid #1da1f2;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  Button {
    margin-left: 35%;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: var(--blue-twitter) !important;
    border: none !important;
    color: #fff !important;
    font-weight: normal !important;
    text-transform: inherit !important;
    height: 46px !important;
    max-width: 260px;
    max-height: 2em;
    padding: 0 30px !important;
    border-radius: 9999px !important;
    :hover {
      background-color: var(--blue-hover-twitter) !important;
    }
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
  @media only screen and (max-width: 1280px) {
    flex: 0.75;
  }
  @media only screen and (max-width: 1000px) {
    flex: 0.7;
    .separation-mobile {
      height: 50px;
    }
  }
  @media only screen and (max-width: 600px) {
    flex: 1;
    margin-bottom: 50px;
  }
`;

export const Header = styled.div`
  padding: 15px;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
`;

/* PostBox */

export const Postbox = styled.div`
  width: 566px;
  padding: 5px 15px;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
  input[type="submit"] {
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    outline: none;
    font-size: 16px;
    border: 1px solid #333;
    border-radius: 9999px;
    background: #03a9f4;
    border: none;
    color: #fff;
    max-width: 100px;
    cursor: pointer;
    :hover {
      filter: brightness(0.8);
      transition: 0.1s ease-in-out;
    }
  }
`;
export const Form = styled.form`
  textarea {
    resize: none;
    width: calc(100% - 40px);
    border: none;
    padding: 10px;
    font-size: 20px;
    line-height: 24px;
    font-family: "Poppins", sans-serif;
  }
  input[type="submit"] {
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    outline: none;
    font-size: 16px;
    border: 1px solid #333;
    border-radius: 9999px;
    background: #03a9f4;
    border: none;
    color: #fff;
    max-width: 100px;
    cursor: pointer;
    :hover {
      filter: brightness(0.8);
      transition: 0.1s ease-in-out;
    }
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #ddd;
  .columns {
    width: 100%;
    padding: 5px;
  }
  .element-submit {
    margin: 6px 6px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    .imgs {
      display: flex;
      gap: 16px;
    }
    img {
      cursor: pointer;
      width: 20px;
      height: 20px;
      filter: invert(59%) sepia(100%) saturate(3685%) hue-rotate(179deg)
        brightness(100%) contrast(88%);
      :hover {
        background-color: rgba(29, 155, 240, 10%);
        border-radius: 10%;
      }
    }
  }
  Button {
    margin-right: 20px;
    background-color: var(--blue-twitter);
    border: none;
    color: #fff;
    font-weight: 500;
    text-transform: inherit;
    height: 35px;
    width: 75px;
    padding: 0 30px;
    border-radius: 9999px;
    :hover {
      background-color: var(--blue-hover-twitter);
    }
  }
`;
export const Avatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: fill;
  border: 1px #ddd solid;
`;

/* Posts */

export const Post = styled.div`
  /* pointer-events: none; */
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
  margin-top: 5px;
  display: flex;
  align-items: flex-start;
  .post-avatar {
    margin-top: 5px;
  }
`;
export const PostBody = styled.div`
  padding-left: 10px;
  width: 100%;
  overflow: hidden;
  > div span {
    font-weight: 600;
    font-size: 15px;
    color: #5b7083;
  }
  h3 {
    padding: 0;
    margin: 0;
  }
  .date {
    color: #536471;
    font-size: 12px;
    line-height: 20px;
    font-weight: normal;
  }
`;
export const PostDescription = styled.div`
  margin-bottom: 10px;
  > p {
    text-align: justify;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 16.7px;
  }
`;
export const Images = styled.img`
  object-fit: cover;
  border-radius: 20px;
  min-width: 100%;
  width: 100%;
  min-height: 300px;
  max-height: 300px;
`;
export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: #5b7083;
  transition: all 100ms ease-in;
  cursor: pointer;
  .icon-center {
    display: flex;
    align-items: stretch;
    gap: 10px;
  }
  .like .MuiSvgIcon-root{
    pointer-events: none;
  }
  .dislike .MuiSvgIcon-root{
    pointer-events: none;
  }
  .like .MuiSvgIcon-root:hover {
    fill: #1da1f2;
  }
  #likeactive .MuiSvgIcon-root {
    fill: #1da1f2 ;
  }
  #dislikeactive .MuiSvgIcon-root {
    fill: #f91880 ;
  }
  .dislike .MuiSvgIcon-root:hover {
    fill: #f91880;
  }
  .comment .MuiSvgIcon-root:hover {
    fill: #00ba7c;
  }
  .share .MuiSvgIcon-root:hover {
    fill: #1da1f2;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none !important;
  color: inherit;
  display: inherit;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none !important;
    color: inherit;
    display: inherit;
  }
`;
