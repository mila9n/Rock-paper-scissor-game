import React from "react";
import { HeaderStyle } from "./Styles/Header.styled";

export default function Header(props) {
  return (
    <HeaderStyle>
      <img src="../images/logo.svg" />
      <div>
        score<span>{props.score}</span>
      </div>
    </HeaderStyle>
  );
}
