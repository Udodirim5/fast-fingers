import GameBox from "./GameBox";

const KeyboardShortcuts = ({ setIsHelpOpen }) => {
  const shortcuts = [
    { key: "Ctrl + H", action: "Toggle the help window" },
    { key: "Ctrl + Z", action: "Undo last action" },
    { key: "Ctrl + Shift + Z", action: "Redo last action" },
    { key: "Ctrl + C", action: "Copy selected text" },
    { key: "Ctrl + V", action: "Paste from clipboard" },
    { key: "Alt + Tab", action: "Switch between open applications" },
    { key: "Ctrl + F", action: "Search in the document" },
    { key: "Ctrl + P", action: "Print current document" },
    { key: "Esc", action: "Pause or resume the game" },
    { key: "Space bar", action: "Restart the game" },
  ];

  const handleCloseHelp = () => setIsHelpOpen(false);

  return (
    <div className="shortcut-help">
      <GameBox>
        <button onClick={handleCloseHelp} className="close-help">
          x
        </button>
        <h2>Keyboard Shortcuts</h2>
        <div className="help-grid">
          {shortcuts.map((shortcut, index) => (
            <div className="help-card" key={index}>
              <div className="help-key">{shortcut.key}</div>
              <div className="help-action">{shortcut.action}</div>
            </div>
          ))}
        </div>
      </GameBox>
    </div>
  );
};

export default KeyboardShortcuts;
