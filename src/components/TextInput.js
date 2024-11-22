const TextInput = ({ inputValue, handleInputChange, feedback }) => {
  return (
    <div className="input-overlay">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        autoFocus
        style={{ color: feedback }}
      />
    </div>
  );
};

export default TextInput;