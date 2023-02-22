import React from "react";
import { CompareStyle } from "./Styles/Compare.styled";

export default function Compare(props) {
  return (
    <CompareStyle>
      <div>{props.player1}</div>
      <div>
        {props.result}
        <button onClick={props.handlePlayAgain}>Play Again</button>
      </div>
      <div>{props.player2}</div>
    </CompareStyle>
  );
}
