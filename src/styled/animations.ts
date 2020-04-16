import { keyframes } from 'styled-components'

export const pulse = keyframes`
 0% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1.1);
  }
`

export const wrench = keyframes`
 0% {
    transform: rotate(-12deg);
  }
  8% {
    transform: rotate(12deg);
  }
  10% {
    transform: rotate(24deg);
  }
  18%,
  20% {
    transform: rotate(-24deg);
  }
  28%,
  30% {
    transform: rotate(24deg);
  }
  38%,
  40% {
    transform: rotate(-24deg);
  }
  48%,
  50% {
    transform: rotate(24deg);
  }
  58%,
  60% {
    transform: rotate(-24deg);
  }
  68% {
    transform: rotate(24deg);
  }
  100%,
  75% {
    transform: rotate(0);
  }
`

export const horizontal = keyframes`
  0% {
    transform: translate(0, 0);
  }
  6% {
    transform: translate(5px, 0);
  }
  12% {
    transform: translate(0, 0);
  }
  18% {
    transform: translate(5px, 0);
  }
  24% {
    transform: translate(0, 0);
  }
  30% {
    transform: translate(5px, 0);
  }
  100%,
  36% {
    transform: translate(0, 0);
  }
`

export const vertical = keyframes`
  0% {
    transform: translate(0, -3px);
  }
  4% {
    transform: translate(0, 3px);
  }
  8% {
    transform: translate(0, -3px);
  }
  12% {
    transform: translate(0, 3px);
  }
  16% {
    transform: translate(0, -3px);
  }
  20% {
    transform: translate(0, 3px);
  }
  100%,
  22% {
    transform: translate(0, 0);
  }
`

export const tada = keyframes`
   0% {
    transform: scale(1);
  }
  10%,
  20% {
    transform: scale(0.9) rotate(-8deg);
  }
  30%,
  50%,
  70% {
    transform: scale(1.3) rotate(8deg);
  }
  40%,
  60% {
    transform: scale(1.3) rotate(-8deg);
  }
  100%,
  80% {
    transform: scale(1) rotate(0);
  }
`
