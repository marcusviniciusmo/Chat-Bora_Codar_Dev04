import styled from "styled-components";

export const Container = styled.div`
  width: var(--width-chat-window);
  height: 7.6rem;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 1.4rem;
`;

export const Content = styled.div`
  width: var(--width-chat-window);
  height: 4.8rem;
  padding: 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  gap: 1.6rem;
`;

export const Avatar = styled.div`
  width: 4.8rem;
  height: 4.8rem;
`;

export const ContactImg = styled.img`
  border-radius: 50%;
`;

export const Info = styled.div`
  width: 78rem;
  height: 3.7rem;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
`;

export const Name = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.9rem;
`;

export const Status = styled.div`
  width: 7.5rem;
  height: 1.4rem;
  padding: 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
`;

export const Ellipse = styled.div`
  background: var(--color-status-online);
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
`;

export const Description = styled.span`
  color: var(--color-status-online);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4rem;
`;

export const Close = styled.div`
  width: 2rem;
  height: 2rem;
  padding-inline: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  cursor: pointer;

  &:hover {
    zoom: 1.3;
  }
`;

export const DateTime = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4rem;
  text-align: center;
`;