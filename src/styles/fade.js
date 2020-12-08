import { keyframes } from 'styled-components'

export const fadeInUpward = keyframes`
    0%, 20% {
        transform: translateY(65px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`

export const fadeInLeft = keyframes`
    0%, 20% {
        transform: translateX(5em);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`

export const fadeOutLeft = keyframes`
    0%, 20% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(5em);
        opacity: 0;
    }
`
