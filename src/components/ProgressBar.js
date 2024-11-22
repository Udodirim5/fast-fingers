const ProgressBar = ({ timeLeft, gameTime }) => {
  const progressPercentage = (timeLeft / gameTime) * 100; // Calculate the percentage width
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
