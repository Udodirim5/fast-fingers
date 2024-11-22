const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
