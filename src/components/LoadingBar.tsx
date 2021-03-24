import { useState } from "react";

import "nes.css/css/nes.min.css";
import "../styles/LoadingBar.css";

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    if (progress === 100) {
      setProgress(0);
    } else {
      setProgress(progress + 10);
    }
  };

  setTimeout(increaseProgress, 40);

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
