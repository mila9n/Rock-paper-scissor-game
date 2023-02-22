import styled from "styled-components";

export const StartingStyled = styled.div`
  display: flex;
  margin: 80px auto;
  width: 30%;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;

  & div {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & div > div {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 180px;
    height: 180px;
    border-radius: 100px;
  }

  & div > div img {
    width: 45%;
  }

  & div:nth-of-type(3) {
    margin: 0 auto;
  }
`;
