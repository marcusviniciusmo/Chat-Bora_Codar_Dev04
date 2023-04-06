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