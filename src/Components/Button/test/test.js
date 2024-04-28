import React, { useState, useEffect } from "react";
import "./styles.css";
import Lottie from "react-lottie";
import defaultAnimationData from "./lotties/default.json";
import greenAnimationData from "./lotties/green.json";
import yellowAnimationData from "./lotties/yellow.json";

export default function App() {
  const [isHeld, setIsHeld] = useState(false);
  const [animationSize, setAnimationSize] = useState({
    height: 400,
    width: 400,
  });
  const [sizeIncreases, setSizeIncreases] = useState(0);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: isHeld ? greenAnimationData : defaultAnimationData, // Conditional animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    let intervalId;
    if (isHeld) {
      intervalId = setInterval(() => {
        setAnimationSize((prevSize) => {
          if (prevSize.height < 450) {
            const newHeight = Math.min(
              prevSize.height * 1.01,
              prevSize.height * 1.1
            );
            // Increase height by 5% up to 1.5 times original size
            const newWidth = Math.min(
              prevSize.width * 1.01,
              prevSize.width * 1.1
            ); // Increase width by 5% up to 1.5 times original size
            console.log("PrevSize:", prevSize); // Log prevSize to console
            setSizeIncreases((prevIncreases) => prevIncreases + 1); // Increase size increase count
            return { height: newHeight, width: newWidth };
          } else {
            const newHeight = Math.min(prevSize.height, prevSize.height);
            const newWidth = Math.min(prevSize.width, prevSize.width);
            setSizeIncreases((prevIncreases) => prevIncreases + 1); // Increase size increase count
            return { height: newHeight, width: newWidth };
          }
        });
      }, 100); // Increase size every 100 milliseconds
    } else {
      clearInterval(intervalId); // Clear interval when not held down
      setSizeIncreases(0); // Reset size increase count
    }
    return () => clearInterval(intervalId);
  }, [isHeld]);

  const handleHoldImage = () => {
    setIsHeld(true);
  };

  const handleReleaseImage = () => {
    setIsHeld(false);
    setAnimationSize({ height: 400, width: 400 }); // Reset size when released
  };

  return (
    <div>
      <div
        className={isHeld ? "held" : ""}
        onMouseDown={handleHoldImage}
        onMouseUp={handleReleaseImage}
        onMouseLeave={handleReleaseImage}
      >
        <Lottie
          options={defaultOptions}
          height={animationSize.height}
          width={animationSize.width}
          isPaused={false} // Always keep animation playing
        />
      </div>
    </div>
  );
}
