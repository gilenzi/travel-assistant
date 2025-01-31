import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledLoader = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.5);
  border-left-color: #fff;
  border-radius: 50%;
  animation: ${spin} 1s ease-in-out infinite;
`;

export const LoadingText = styled.p`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  animation: ${pulse} 1.5s infinite;
`;
