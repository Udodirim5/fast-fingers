const Words = ({ index, completedWords, word }) => {
  return (
    <div
      className={`word ${
        completedWords.includes(word)
          ? "completed"
          : index === 0
          ? "active"
          : "inactive"
      }`}
    >
      {word}
    </div>
  );
};

export default Words;
