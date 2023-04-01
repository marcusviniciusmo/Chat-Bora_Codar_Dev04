import styled from "styled-components";

export const Container = styled.div`
  width: 35rem;
  height: 7.6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  padding: 0rem 1rem;
  gap: 2rem;
`;

export const Avatar = styled.div`
  background: gray;
  font-size: 1.1rem;
  font-weight: 700;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

export const Icons = styled.div`
  padding-right: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  scale: 1.5;
`;

export const Icon = styled.div`
  cursor: pointer;
`;