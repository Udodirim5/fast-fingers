import Words from "./Words";

const WordStacks = ({ wordStack, completedWords }) => {

  return (
    <div className="words-wall">
      <div className="word-stack">
        {wordStack.map((word, index) => (
          <Words
            key={index}
            index={index}
            word={word}
            completedWords={completedWords}
          />
        ))}
      </div>
    </div>
  );
};

export default WordStacks;
