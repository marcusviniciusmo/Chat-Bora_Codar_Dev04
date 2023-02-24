import styled from "styled-components";

export const Container = styled.div`
  width: var(--max-width-chat);
  height: 7.6rem;
  padding: 2.4rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 1rem;
  box-sizing: border-box;
`;

export const Message = styled.div`
  background: var(--background-input-send);
  width: var(--max-width-chat);
  height: 5.2rem;
  padding: 1.4rem 2.4rem;
  border-radius: 99.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  gap: 1rem;
  position: relative;
  box-sizing: border-box;
`;

export const Input = styled.input`
  all: unset;
  color: var(--color-text-input);
  width: 79.8rem;
  height: 1.4rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4rem;
`;