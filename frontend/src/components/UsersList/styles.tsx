import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;

export const UserContainer = styled.div`
  height: 7.5rem;
  margin-bottom: 0.5rem;
  padding-inline: 1rem;
  border-bottom: 0.1rem solid var(--color);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  cursor: pointer;

  &:hover {
    background: var(--background-secondary);
    opacity: 0.7;
  }
`;

export const Info = styled.div`
  width: 17rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Name = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Message = styled.span`
  font-size: 1.2rem;
  opacity: 0.8;
`;

export const DateTime = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: flex-end;
  opacity: 0.7;
`;