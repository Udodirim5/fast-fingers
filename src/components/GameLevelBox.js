import Button from "./Button";

const GameLevelBox = ({
  gameTime,
  setAtHome,
  gameMode,
  setGameTime,
  selectedLevel,
  handleStartGame,
  setSelectedLevel,
}) => {
  const handleBackBtn = () => {
    setAtHome(false);
  };

  return (
    <>
      <h1>Fast Fingers</h1>
      <button className="level-back-btn" onClick={handleBackBtn}>
        <span>&#8666;</span>
      </button>
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
    </>
  );
};

export default GameLevelBox;
