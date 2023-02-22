import React from "react";
import { GloblaStyle } from "./Components/Styles/Global.styled";

import Header from "./Components/Header";
import Starting from "./Components/Starting";
import GameButton from "./Components/GameButton";
import Compare from "./Components/Compare";
import WeaponData from "./WeaponData";
import { ThemeProvider } from "styled-components";

function App() {
  const [weapon, setWeapon] = React.useState(WeaponData);

  const [player1, setPlayer1] = React.useState("");
  const [player2, setPlayer2] = React.useState("");
  const [result, setResult] = React.useState("");
  const [score, setScore] = React.useState(0);
  const [compareScreen, setCompareScreen] = React.useState(false);

  const theme = {
    color:
      result === "You Won!"
        ? "greenYellow"
        : result === "You Loose!"
        ? "tomato"
        : "white",
  };

  const player2Weapon = (randomWeapon) => {
    setPlayer2(() => {
      return (
        <GameButton
          color={randomWeapon.color}
          id={randomWeapon.id}
          src={randomWeapon.src}
        />
      );
    });
  };

  const player1Weapon = (component) => {
    setPlayer1(() => {
      return (
        <GameButton
          color={component.color}
          src={component.src}
          id={component.id}
        />
      );
    });
  };

  const compare = (player1, player2) => {
    if (player1 == "rock" && player2 == "scissors") {
      setResult("You Won!");
      setScore((prevScore) => prevScore + 1);
    } else if (player1 == "scissors" && player2 == "paper") {
      setResult("You Won!");
      setScore((prevScore) => prevScore + 1);
    } else if (player1 == "paper" && player2 == "rock") {
      setResult("You Won!");
      setScore((prevScore) => prevScore + 1);
    } else if (player1 == player2) {
      setResult("You Drew!");
    } else {
      setResult("You Loose!");
      setScore((prevScore) => prevScore - 1);
    }
  };

  const handleButtonClick = (index) => {
    const randomWeapon = WeaponData[Math.floor(Math.random() * 3)];
    const component = WeaponData[index];
    player1Weapon(component);
    player2Weapon(randomWeapon);
    compare(component.id, randomWeapon.id);
    setCompareScreen((prevScreen) => !prevScreen);
  };

  const handlePlayAgain = () => {
    setCompareScreen((prevScreen) => !prevScreen);
  };

  const weapons = weapon.map((item, index) => {
    return (
      <GameButton
        color={item.color}
        src={item.src}
        id={item.id}
        handle
        handleButtonClick={() => handleButtonClick(index)}
        key={index}
      />
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <GloblaStyle />
        <Header score={score} />

        {!compareScreen ? (
          <Starting weapons={weapons} />
        ) : (
          <Compare
            player1={player1}
            player2={player2}
            result={result}
            handlePlayAgain={handlePlayAgain}
          />
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
