import { useEffect, useState } from "react";
import { SentMessageMocks, SentMessageProps } from "../../types/SentMessage";
import { MockedData } from "../../mocks/SentMessage";
import { Container, Info, Content, Message } from "./styles";

export function SentMessage(props: SentMessageProps) {
  const [mockedData, setMockedData] = useState<SentMessageMocks>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Container
      className={props.sender
        ? mockedData?.classNameContact
        : mockedData?.classNameUser}
    >
      <Info>
        {props.sender ? props.sender : mockedData?.labelUser} - {props.time}
      </Info>

      <Content
        className={props.sender
          ? mockedData?.classNameContact
          : mockedData?.classNameUser}
      >
        <Message>{props.message}</Message>
      </Content>
    </Container>
  );
};