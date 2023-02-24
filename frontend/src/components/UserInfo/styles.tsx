import styled from "styled-components";
import { AvatarProps } from "../../types/UserInfo";

export const Container = styled.div`
  width: var(--max-width-chat);
  height: 7.6rem;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
`;

export const Info = styled.div`
  width: var(--max-width-chat);
  height: 4.8rem;
  padding: 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  gap: 1.6rem;
`;

export const Avatar = styled.div<AvatarProps>`
  background: url('${(props) => props.background}');
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
`;

export const Details = styled.div`
  width: 78.0rem;
  height: 3.7rem;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
`;

export const Contact = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.9rem;
`;

export const Status = styled.div`
  height: 1.4rem;
  padding: 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
`;

export const Ellipse = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;

  &.online {
    background: var(--color-online);
  }

  &.offline {
    background: var(--color-offline);
    opacity: 0.7;
  }
`;

export const Description = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4rem;

  &.online {
    color: var(--color-online);
  }

  &.offline {
    color: var(--color-offline);
    opacity: 0.7;
  }
`;

export const Close = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
`;

export const Icon = styled.img`
  position: absolute;
  inset: 20.83%;
  cursor: pointer;
`;

export const Date = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4rem;
  text-align: center;
`;