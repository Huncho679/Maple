import React, { useState, useEffect } from "react";
import "./styles.css";
import Lottie from "react-lottie";
import defaultAnimationData from "./lotties/default.json";
import greenAnimationData from "./lotties/green.json";
import yellowAnimationData from "./lotties/yellow.json";
import { useApp } from "../../../../Context/Context";

export default function Button() {

  const { color, handleColor } = useApp();  


  const [isHeld, setIsHeld] = useState(false);
  const [animationSize, setAnimationSize] = useState({
    height: 400,
    width: 400,
  });
  const [sizeIncreases, setSizeIncreases] = useState(0);
  const [animationData, setAnimationData] = useState(defaultAnimationData);

  console.log("sizeIncreases",sizeIncreases)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // Dynamic animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    let intervalId;
    if (isHeld) {
      intervalId = setInterval(() => {
        setAnimationSize((prevSize) => {
          let newHeight;
          let newWidth;
          if (prevSize.height < 450) {
            newHeight = Math.min(
              prevSize.height * 1.007,
              prevSize.height * 1.05
            );
            setAnimationData(yellowAnimationData);
            handleColor(1);
            // Increase height by 5% up to 1.5 times original size
            newWidth = Math.min(prevSize.width * 1.007, prevSize.width * 1.05); // Increase width by 5% up to 1.5 times original size
          } else {
            newHeight = prevSize.height;
            newWidth = prevSize.width;
            // Switch to yellow.json if height is less than 450
            if (animationData !== greenAnimationData) {
              setAnimationData(greenAnimationData);
              handleColor(2);
            }
          }
          console.log("PrevSize:", prevSize); // Log prevSize to console
          setSizeIncreases((prevIncreases) => prevIncreases + 1); // Increase size increase count
          return { height: newHeight, width: newWidth };
        });
      }, 100); // Increase size every 100 milliseconds
    } else {
      intervalId = setInterval(() => {
        setAnimationSize((prevSize) => {
          setAnimationData(yellowAnimationData);
          handleColor(1);
          const newHeight = Math.max(
            prevSize.height / 1.003,
            prevSize.height / 1.05
          ); // Decrease height by 0.7% up to original size
          const newWidth = Math.max(
            prevSize.width / 1.003,
            prevSize.width / 1.05
          ); // Decrease width by 0.7% up to original size
          console.log("PrevSize:", prevSize); // Log prevSize to console
          if (newHeight <= 400) {
            clearInterval(intervalId);
            setAnimationData(defaultAnimationData); // Reset animation data to default
            handleColor(0);
          }
          return { height: newHeight, width: newWidth };
        });
      }, 100); // Decrease size every 100 milliseconds
    }

    return () => clearInterval(intervalId);
  }, [isHeld, animationData]);

  const handleHoldImage = () => {
    setIsHeld(true);
  };

  const handleReleaseImage = () => {
    setIsHeld(false);
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
