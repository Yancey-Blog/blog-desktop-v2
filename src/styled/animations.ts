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

export const mains = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const glitchLoop1 = keyframes`
   0% {
    clip: rect(36px, 9999px, 9px, 0);
  }

  25% {
    clip: rect(25px, 9999px, 99px, 0);
  }

  50% {
    clip: rect(50px, 9999px, 102px, 0);
  }

  75% {
    clip: rect(30px, 9999px, 92px, 0);
  }

  100% {
    clip: rect(91px, 9999px, 98px, 0);
  }
`

export const glitchLoop2 = keyframes`
 0% {
    top: -1px;
    left: 1px;
    clip: rect(65px, 9999px, 119px, 0);
  }

  25% {
    top: -6px;
    left: 4px;
    clip: rect(79px, 9999px, 19px, 0);
  }

  50% {
    top: -3px;
    left: 2px;
    clip: rect(68px, 9999px, 11px, 0);
  }

  75% {
    top: 0;
    left: -4px;
    clip: rect(95px, 9999px, 53px, 0);
  }

  100% {
    top: -1px;
    left: -1px;
    clip: rect(31px, 9999px, 149px, 0);
  }
`

export const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0);
  }`

export const bang = keyframes`
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white;
  }
}`

export const gravity = keyframes`{
  to {
    transform: translateY(200px);
    opacity: 0;
  }
}`

export const position = keyframes`
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}`
