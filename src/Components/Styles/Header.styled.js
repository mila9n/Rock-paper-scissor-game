import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 80%;
  max-width: 1100px;
  margin: 40px auto;
  border: 3px solid hsl(217, 16%, 45%);
  border-radius: 20px;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 120px;
  }

  div {
    background-color: #fff;
    padding: 10px 20px;
    width: 110px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    color: #1a2749;
  }

  div > span {
    display: block;
    font-size: 40px;
    margin: 0;
    line-height: 0.8;
    font-weight: 800;
    color: #56546a;
  }
`;
