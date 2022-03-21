import styled from "styled-components";

export const Container = styled.div`
  flex: 0.5;
  border-right: 1px solid #ddd;
  overflow-y: scroll;
  box-sizing: border-box;
  --ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 1280px) {
    flex: 0.55;
  }
  @media only screen and (max-width: 1000px) {
    flex: 0.95;
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
  /* min-height: 192px; */
  padding: 5px 15px;
  border-bottom: 1px solid #ddd;
  @media only screen and (max-width: 1000px) {
    width: 100%;
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
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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
`;

/* Posts */

export const Post = styled.div`
  cursor: pointer;
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
  margin-top: 5px;
  display: flex;
  align-items: flex-start;
  .post-avatar {
    margin-top: 5px;
  }
  :hover {
    background-color: rgba(0, 0, 0, 3%);
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
  .like .MuiSvgIcon-root:hover {
    fill: #1da1f2;
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
