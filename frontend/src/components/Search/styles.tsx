import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;

export const Input = styled.input`
  background: var(--background-input-send);
  color: var(--color);
  font-size: 1.4rem;
  height: 4rem;
  padding-inline: 1.2rem;
  border: none;
  border-radius: 1rem;

  &::placeholder {
    padding-inline: 0.2rem;
  }
`;