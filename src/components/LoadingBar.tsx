import { useState, useEffect } from "react";

import "../styles/LoadingBar.css";

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      progress === 100 ? setProgress(0) : setProgress(progress + 10);
    }, 40);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="LoadingBar">
      <div className="loading-message">Loading...</div>
      <progress
        className="nes-progress is-success"
        value={progress}
        max="100"
      ></progress>
    </div>
  );
};

export default LoadingBar;
