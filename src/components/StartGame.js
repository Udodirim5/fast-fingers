import { useState } from "react";

import Home from "./Home";
import GameBox from "./GameBox";
import GameLevelBox from "./GameLevelBox";

const StartGame = ({
  selectedLevel,
  setSelectedLevel,
  handleStartGame,
  gameTime,
  setGameTime,
  gameMode,
  setGameMode,
  onHelpOpen,
  isHelpOpen,
}) => {
  const [atHome, setAtHome] = useState(false);

  const handleNext = () => {
    setAtHome((atHome) => !atHome);
  };

  return (
    <>
      {!atHome ? (
        <GameBox onHelpOpen={onHelpOpen} isHelpOpen={isHelpOpen}>
          <Home
            gameMode={gameMode}
            onNext={handleNext}
            setGameMode={setGameMode}
          />
        </GameBox>
      ) : (
        <GameBox onHelpOpen={onHelpOpen}>
          <GameLevelBox
            gameTime={gameTime}
            gameMode={gameMode}
            setAtHome={setAtHome}
            setGameTime={setGameTime}
            selectedLevel={selectedLevel}
            handleStartGame={handleStartGame}
            setSelectedLevel={setSelectedLevel}
          />
        </GameBox>
      )}
    </>
  );
};
export default StartGame;
