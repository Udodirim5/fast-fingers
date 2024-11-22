import TrafficLight from "./TrafficLight";
import ProgressBar from "./ProgressBar";
import WordStacks from "./WordStacks";
import TextInput from "./TextInput";
import Countdown from "./Countdown";

const GameContainer = ({
  feedback,
  gameTime,
  timeLeft,
  countdown,
  wordStack,
  inputValue,
  gameActive,
  activeLight,
  completedWords,
  handleInputChange,
}) => {
  return (
    <div className="game-container">
      <div className="game-container-inner">
        {countdown > 0 && (
          <Countdown>
            <TrafficLight activeLight={activeLight} />
            <h1>{countdown}</h1>
          </Countdown>
        )}
        {countdown === 0 && gameActive && (
          <div className="back-card">
            <div className="back-card-inner">
              <WordStacks
                wordStack={wordStack}
                completedWords={completedWords}
              />
              <TextInput
                feedback={feedback}
                inputValue={inputValue}
                handleInputChange={handleInputChange}
              />
              <ProgressBar timeLeft={timeLeft} gameTime={gameTime} />
              <div
                className="timer"
                style={{ color: timeLeft > 3 ? "green" : "red" }}
              >
                Time Left: {timeLeft}s
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameContainer;
