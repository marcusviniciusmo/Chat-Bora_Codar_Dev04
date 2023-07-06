import { useEffect, useRef } from "react";
import { SentMessage } from "../SentMessage";
import { HistoricProps } from "../../types/Historic";
import { Container, Content } from "./styles";

export function Historic(props: HistoricProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    };
  }, [props.messages]);

  return (
    <Container>
      <Content ref={containerRef}>
        {
          props.messages.map((message) => {
            return (
              <SentMessage
                key={message.id}
                sender={message.sender}
                time={message.time}
                message={message.message}
              />
            )
          })
        }
      </Content>
    </Container>
  );
};