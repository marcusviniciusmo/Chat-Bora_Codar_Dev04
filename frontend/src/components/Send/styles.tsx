import styled from "styled-components";
import { SendButtonMocks } from "../../types/Send";

export const Container = styled.div`
  width: var(--width-chat-window);
  height: 7.6rem;
  padding: 2.4rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 1rem;
  position: absolute;
  top: 62.5%;
`;

export const Field = styled.input`
  background: var(--background-input-send);
  color: var(--color);
  width: var(--width-chat-window);
  height: 5.2rem;
  padding: 1.4rem 2.4rem;
  border: none;
  border-radius: 99.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  box-sizing: border-box;

  &::placeholder {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.4rem;
  }
`;

export const Button = styled.div<SendButtonMocks>`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: 40%;
  right: 2%;
  visibility: ${(props) => props.visible ? 'visible' : 'hidden'};
`;

export const Icon = styled.img`
  cursor: pointer;
`;