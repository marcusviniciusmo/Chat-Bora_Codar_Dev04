import styled from "styled-components";

export const Container = styled.div`
  width: var(--width-chat-window);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;

export const Content = styled.div`
  max-height: 30rem;
  overflow-y: auto;
`;