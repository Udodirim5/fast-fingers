import React, { useState, useEffect } from "react";

import wordLevels from "../data/wordLevels";

import GameOver from "./GameOver";
import StartGame from "./StartGame";
import CustomCursor from "./CustomCursor";
import WarningModal from "./WarningModal";
import GameContainer from "./GameContainer";

const App = () => {
  const [countdown, setCountdown] = useState(3);
  const [gameActive, setGameActive] = useState(false);
  const [currentWord, setCurrentWord] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [wordStack, setWordStack] = useState([]);
  const [feedback, setFeedback] = useState("red");
  const [completedWords, setCompletedWords] = useState([]);
  const [timeLeft, setTimeLeft] = useState(5);
  const [selectedLevel, setSelectedLevel] = useState("easy");
  const [gameTime, setGameTime] = useState(5);
  const [activeLight, setActiveLight] = useState("red");
  const [duration, setDuration] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameMode, setGameMode] = useState("normal");

  const timeAttack = 20;

  useEffect(() => {
    if (gameActive && countdown === 0 && timeLeft > 0) {
      const esc = (e) => {
        if (e.key === "Escape") {
          setIsModalOpen((isModalOpen) => !isModalOpen);
        }
      };

      document.addEventListener("keydown", esc);
      return () => {
        document.removeEventListener("keydown", esc);
      };
    }
  }, [gameActive, countdown, timeLeft]);

  // check total time played
  useEffect(() => {
    if (gameActive && countdown === 0 && !isModalOpen) {
      const interval = setInterval(
        () => setDuration((duration) => duration + 1),
        1000
      );
      return () => clearInterval(interval);
    }
  }, [gameActive, countdown, isModalOpen]);

  // Countdown before starting the game
  useEffect(() => {
    if (gameActive && countdown > 0 && !isModalOpen) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      updateLight(countdown);
      return () => clearTimeout(timer);
    }
  }, [countdown, gameActive, isModalOpen]);

  useEffect(() => {
    if (gameActive && countdown === 0 && timeLeft > 0 && !isModalOpen) {
      const timer = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }

    if (timeLeft === 0 && gameActive) {
      handleGameOver();
    }
  }, [timeLeft, gameActive, countdown, isModalOpen]);

  // Reset timeLeft when the game starts or switches modes
  useEffect(() => {
    if (gameMode === "timed" && gameActive && countdown === 0) {
      setTimeLeft(timeAttack);
    } else if (gameMode === "normal" && gameActive && countdown === 0) {
      setTimeLeft(gameTime);
    }
  }, [gameMode, gameActive, countdown, gameTime]);

  // Update current word when word stack changes
  useEffect(() => {
    if (wordStack.length > 0) {
      setCurrentWord(wordStack[0]);
      if (gameMode === "normal") {
        setTimeLeft(gameTime);
      }
    }
  }, [wordStack, gameTime, gameMode]);

  const handleCancelModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);

    if (value === currentWord) {
      setFeedback("green");
      setCompletedWords((prev) => [...prev, currentWord]);
      setTimeout(() => {
        setInputValue("");
        moveToNextWord();
      }, 300);
    } else {
      setFeedback("red");
    }
  };

  const moveToNextWord = () => {
    setFeedback("");
    setWordStack((prevStack) => prevStack.slice(1));
    if (wordStack.length === 1) {
      handleGameOver();
    }
  };

  const handleGameOver = () => {
    setGameActive(false);
    setFeedback("red");
  };

  const handleStartGame = () => {
    setWordStack([...wordLevels[selectedLevel]]);
    setGameActive(true);
    setHasStarted(true);
    setCountdown(3);
  };

  const updateLight = (count) => {
    if (count === 3) {
      setActiveLight("red");
    } else if (count === 2) {
      setActiveLight("yellow");
    } else if (count === 1) {
      setActiveLight("green");
    }
  };

  const handleRestartGame = () => {
    setCountdown(3);
    setGameActive(false);
    setCurrentWord("");
    setHasStarted(false);
    setInputValue("");
    setWordStack([]);
    setFeedback("red");
    setCompletedWords([]);
    setTimeLeft(5);
    setSelectedLevel("easy");
    setGameTime(5);
    setActiveLight("red");
    setDuration(0);
    setIsModalOpen(false);
  };

  return (
    <>
      <CustomCursor />
      {isModalOpen && gameActive ? (
        <WarningModal onCancelModal={handleCancelModal} />
      ) : (
        ""
      )}

      {!hasStarted ? (
        <StartGame
          gameMode={gameMode}
          setGameMode={setGameMode}
          gameTime={gameTime}
          setGameTime={setGameTime}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          handleStartGame={handleStartGame}
        />
      ) : (
        <GameContainer
          feedback={feedback}
          gameTime={gameTime}
          timeLeft={timeLeft}
          countdown={countdown}
          wordStack={wordStack}
          inputValue={inputValue}
          gameActive={gameActive}
          activeLight={activeLight}
          completedWords={completedWords}
          handleInputChange={handleInputChange}
        />
      )}

      {!gameActive && countdown === 0 && (
        <GameOver
          onResetGame={handleRestartGame}
          timeLeft={timeLeft}
          duration={duration}
          completedWords={completedWords}
          totalWords={wordStack.length + completedWords.length}
        />
      )}
    </>
  );
};

export default App;
