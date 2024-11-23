import { useEffect } from "react";
import Button from "./Button";
import GameBox from "./GameBox";

const GameOver = ({
  completedWords,
  totalWords,
  duration,
  timeLeft,
  onResetGame,
  onHelpOpen,
  isHelpOpen,
}) => {
  const accuracy = Math.round((completedWords.length / totalWords) * 100) || 0; // Prevent NaN if no words

  useEffect(() => {
    document.title = "Game Over";
    return () => {
      document.title = "Fast fingers";
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      const spaceBar = (event) => {
        if (event.key === " ") {
          onResetGame();
        }
      };

      document.addEventListener("keydown", spaceBar);

      return () => {
        document.removeEventListener("keydown", spaceBar);
      };
    }
  }, [timeLeft, onResetGame]);

  return (
    <GameBox onHelpOpen={onHelpOpen} isHelpOpen={isHelpOpen}>
      <h1>{accuracy === 100 ? "You win" : "Game Over"}!</h1>
      <div className="completed-scores">
        <div className="score-header">
          <p>Words Typed</p>
          <p>Accuracy</p>
          <p>Duration</p>
        </div>
        <div className="score-values">
          <p>{completedWords.length} words</p>
          <p>{accuracy}%</p>
          <p>{duration} Seconds</p>
        </div>
      </div>
      <Button className="button" onClick={onResetGame}>
        Play Again
      </Button>
    </GameBox>
  );
};

export default GameOver;
