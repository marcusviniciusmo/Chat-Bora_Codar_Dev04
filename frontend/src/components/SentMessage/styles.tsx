import styled from "styled-components";

export const Container = styled.div`
  width: var(--width-chat-window);
  height: 6.6rem;
  margin-top: 1rem;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 1rem;

  &.contact {
    align-items: flex-start;
  }

  &.user {
    align-items: flex-end;
  }
`;

export const Info = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4rem;
  text-align: center;
`;

export const Content = styled.div`
  height: 4.2rem;
  padding: 1.4rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;

  &.contact {
    background: var(--background-message-contact);
    border-radius: 0rem 0.8rem 0.8rem 0.8rem;
  }
  
  &.user {
    background: var(--background-message-user);
    border-radius: 0.8rem 0.8rem 0rem 0.8rem;
  }
`;

export const Message = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4rem;
`;