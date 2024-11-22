import Button from "./Button";
const Home = ({
  onNext,
  gameMode,
  setGameMode,
}) => {
  return (
    <>
      <h1>Fast fingers</h1>
      <div className="level-select">
        <span>Select a game mode</span>
        <select value={gameMode} onChange={(e) => setGameMode(e.target.value)}>
          <option value="normal">Normal</option>
          <option value="timed">Time Attack</option>
        </select>
      </div>
      <Button onClick={onNext}>Next</Button>
    </>
  );
};

export default Home;
