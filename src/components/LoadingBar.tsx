import { useState, useEffect } from "react";

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

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setTimeout(increaseProgress, 100);
    }
    return () => {
      isMounted = false;
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
