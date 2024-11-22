import { useState } from "react";
import Button from "./Button";
import GameBox from "./GameBox";

const StartGame = ({
  selectedLevel,
  setSelectedLevel,
  handleStartGame,
  gameTime,
  setGameTime,
  gameMode,
  setGameMode,
}) => {
  const [atHome, setAtHome] = useState(false);

  const handleNext = () => {
    setAtHome((atHome) => !atHome);
  };

  return (
    <>
      {!atHome ? (
        <GameBox>
          <h1>Fast fingers</h1>
          <div className="level-select">
            <span>Select a game mode</span>
            <select
              value={gameMode}
              onChange={(e) => setGameMode(e.target.value)}
            >
              <option value="normal">Normal</option>
              <option value="timed">Time Attack</option>
            </select>
          </div>
          <Button onClick={handleNext}>Next</Button>
        </GameBox>
      ) : (
        <GameBox>
          <h1>Type Practice</h1>
          <div className="level-select">
            <span>Choose a level</span>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          {gameMode === "normal" && (
            <div className="level-select">
              <input
                type="range"
                min="1"
                max="60"
                value={gameTime}
                onChange={(e) => setGameTime(Number(e.target.value))}
              />
              <span>{gameTime} secs.</span>
            </div>
          )}
          <Button onClick={handleStartGame}>Start Game</Button>
        </GameBox>
      )}
    </>
  );
};

export default StartGame;
