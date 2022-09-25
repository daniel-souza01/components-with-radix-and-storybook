import { keyframes, css } from "styled-components";

const overlayShow = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const overlayHide = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const contentShow = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-50%, calc(-50% + 20px), 0) scale(.96);
  };
  100% {
    opacity: 1;
    transform: rotate3d(-50%, -50%, 0) scale(1);
  }
`;

const contentHide = keyframes`
  0% {
    opacity: 1;
    transform: rotate3d(-50%, -50%, 0) scale(1);
  };
  100% {
    opacity: 0;
    transform: translate3d(-50%, calc(-50% + 20px), 0) scale(.96);

  }
`;

export const ModalOverlay = css`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  inset: 0;
  z-index: 9995;

  &[data-state="open"] {
    animation: ${overlayShow} 0.2s ease-in;
  }

  &[data-state="closed"] {
    animation: ${overlayHide} 0.3s ease-in;
  }
`;

export const ModalWrapper = css`
  position: fixed;
  top: 50%;
  left: 50%;
  backface-visibility: hidden;
  transform: translate3d(-50%, -50%, 0);
  width: 90vw;
  /* max-width: none; */
  background: #fff;
  max-height: 90vh;
  overflow-y: auto;
  z-index: 9999;
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  &[data-state="open"] {
    animation: ${contentShow} 0.3s ease-out;
  }

  &[data-state="closed"] {
    animation: ${contentHide} 0.2s ease-out;
  }

  box-shadow: 0px 1.8px 2.6px rgba(0, 0, 0, 0.038),
    0px 5px 7.1px rgba(0, 0, 0, 0.057), 0px 12.1px 17.2px rgba(0, 0, 0, 0.077),
    0px 40px 57px rgba(0, 0, 0, 0.12);
`;

export const ModalContent = css`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;
