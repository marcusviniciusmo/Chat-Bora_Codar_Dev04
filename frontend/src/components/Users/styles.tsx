import styled from "styled-components";

export const Container = styled.div`
  width: 40rem;
  height: 65rem;
  padding: 3.2rem 1rem;
  border-right: 0.1rem solid var(--border);
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

export const UserContainer = styled.div`
  height: 7rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-bottom: 0.1rem solid var(--border);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
`;

export const Info = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-weight: bold;
`;

export const LastMessage = styled.div`
  opacity: 0.8;
`;

export const User = styled.span``;

export const Message = styled.span``;

export const Date = styled.span`
  font-size: 1.4rem;
  opacity: 0.6;
`;