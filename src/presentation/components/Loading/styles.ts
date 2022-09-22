import styled from "styled-components";


export const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255,255,255,.8);
  z-index: 1;
  top: 0;
  left: 0;
`

export const Pulse = styled.div`
  height: 30px;
  width: 30px;
  position: absolute;
  z-index: 2;
  background: #87c95e;
  left: calc(50% - 15px);
  top: calc(50% - 15px);
  border-radius: 50%;
  opacity: 0.6;
  animation: pulse 1.6s infinite ease-in-out;

  &:first-child {
    animation-delay: .8s;
  }
`