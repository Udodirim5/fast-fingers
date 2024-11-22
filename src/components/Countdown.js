import { useEffect } from "react";

const Countdown = ({ children }) => {
  useEffect(() => {
    document.title = "count down";
    return () => {
      document.title = "Fast fingers";
    };
  }, []);

  return <div className="start-timer">{children}</div>;
};

export default Countdown;
