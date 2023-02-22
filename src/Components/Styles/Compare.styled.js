import styled from "styled-components";

export const CompareStyle = styled.div`
  display: flex;
  width: 60%;
  margin: 120px auto;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;

  & div > div:nth-of-type(1) {
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & div > div > img:nth-of-type(1) {
    width: 70px;
  }

  & div:nth-last-of-type(2) {
    color: ${(props) => props.theme.color};
    font-size: 2.5rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & div:nth-last-of-type(2) button {
    padding: 4px 20px;
    border-radius: 20px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 300ms ease-in;
  }

  & div:nth-last-of-type(2) button:hover {
    transform: scale(1.1);
  }
`;
