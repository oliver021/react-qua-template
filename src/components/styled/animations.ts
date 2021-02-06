import { keyframes } from "styled-components";

// create a reusable animation to rotate 360*
export const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

// create a reusable animation to pulse
export const pulse = keyframes`
0% {
  transform: scale(0);
  opacity: 1;
  transform-origin: center;
}
100% {
  transform: scale(4.5);
  opacity: 0;
  transform-origin: center;
}
`;

// effect animation to icons and buttons
export const delta = keyframes`
from {
  transform: scale(0.8);
}

to {
  transform: scale(1.2);
}
`;