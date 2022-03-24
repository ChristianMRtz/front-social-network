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
  margin-top: 5px;
  display: flex;
  align-items: flex-start;
  .post-avatar {
    margin-top: 5px;
  }
  .username {
    margin-left: 1em;
  }
  :hover {
    background-color: rgba(0, 0, 0, 3%);
  }
  > div h4 {
    font-weight: 600;
    font-size: 15px;
    color: #5b7083;
  }
  h3 {
    padding: 0;
    margin: 0;
  }
`;
export const PostBody = styled.div`
padding: 0 10px 10px;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
`;
export const PostDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
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
export const PostFooterComment = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5rem;
  margin-top: 10px;
  color: #5b7083;
  transition: all 100ms ease-in;
  margin-bottom: 50px;
  cursor: pointer;
  > .MuiSvgIcon-root:hover:nth-child(1) {
    fill: #1da1f2;
  }
  > .MuiSvgIcon-root:hover:nth-child(2) {
    fill: #f91880;
  }
`;

export const PostDetails = styled.div`
  .counter-reactions{
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .date {
    color: #536471;
    font-size: 13.5px;
    line-height: 20px;
  }
`