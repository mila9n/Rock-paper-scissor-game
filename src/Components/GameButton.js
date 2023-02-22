import React from "react";

export default function GameButton(props) {
  const style = {
    border: `12px solid ${
      props.color == "red" ? "red" : props.color == "blue" ? "blue" : "yellow"
    }  
    `,
  };

  return (
    <div>
      <div style={style} onClick={props.handleButtonClick} id={props.id}>
        <img src={props.src} />
      </div>
    </div>
  );
}
