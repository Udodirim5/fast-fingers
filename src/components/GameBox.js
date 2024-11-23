const GameBox = ({ onHelpOpen, isHelpOpen, children }) => {

  return (
    <div className="back-card">
      <div className="back-card-inner">
        <button onClick={onHelpOpen} className="close-help">
          <span>{isHelpOpen ? "ⓧ" : "ⓘ"}</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default GameBox;
