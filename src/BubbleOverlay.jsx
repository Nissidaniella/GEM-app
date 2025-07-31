import React from "react";

const BUBBLE_COUNT = 50;

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const swayTypes = ["sway-left-to-right", "sway-right-to-left"];

const BubbleOverlay = ({ width = 420, height = 110 }) => (
  <div
    className="bubbles"
    style={{
      position: "absolute",
      width: width,
      height: height,
      top: 0,
      left: 0,
      pointerEvents: "none",
      overflow: "hidden",
      zIndex: 1,
    }}
  >
    {/* Make sure you have the required CSS keyframes and .bubble styles in your CSS file! */}
    {Array.from({ length: BUBBLE_COUNT }).map((_, i) => {
      const left = `${randomRange(0, width)}px`;
      const radius = `${randomRange(width * 0.02, width * 0.12)}px`;
      const floatDuration = `${randomRange(6, 12)}s`;
      const swayDuration = `${randomRange(4, 6)}s`;
      const floatDelay = `${randomRange(0, 4)}s`;
      const swayDelay = `${randomRange(0, 4)}s`;
      const swayType = sample(swayTypes);

      return (
        <span
          key={i}
          className={`bubble`}
          style={{
            left,
            width: radius,
            height: radius,
            animation: `float-up ${floatDuration} ${floatDelay} ease-in infinite`,
            position: "absolute",
            bottom: "-75%",
            borderRadius: "50%",
            display: "block",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "hsla(183, 94%, 76%, 0.3)",
              borderRadius: "50%",
              animation: `${swayType} ${swayDuration} ${swayDelay} ease-in-out alternate infinite`,
              content: "''",
              display: "block",
            }}
          />
        </span>
      );
    })}
  </div>
);

export default BubbleOverlay;
