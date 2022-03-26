import styled from "styled-components";

export const Container = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10px 20px;
  @media only screen and (max-width: 1280px) {
    flex: 0.1;
  }
  @media only screen and (max-width: 1010px) {
    display: none;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  background-color: #f7f9f9;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #e1e8ed;
  h1 {
    font-size: 20px;
    line-height: 24px;
    margin: 12px 16px;
  }
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: fill;
  }
  .content-user {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
  .user-profile h2 {
    font-size: 15px;
    line-height: 20px;
  }
  .user-profile p {
    font-size: 15px;
    line-height: 20px;
    color: #536471;
  }
`;

export const Search = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 9999px;
  border: 1px solid #e1e8ed;
  padding: 0 16px;
  font-size: 15px;
  line-height: 20px;
  background-color: #eff3f4;
`;
