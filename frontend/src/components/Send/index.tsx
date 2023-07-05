import { useEffect, useState } from 'react';
import { SendMocks, SendProps } from '../../types/Send';
import { MockedData } from '../../mocks/Send';
import { Container, Field, Button, Icon } from "./styles";

export function Send(props: SendProps) {
  const [mockedData, setMockedData] = useState<SendMocks>();
  const [messageTyped, setMessageTyped] = useState<string>('');

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  const handleSendMessage = () => {
    props.onMessageSend(messageTyped);
    setMessageTyped('');
  };

  return (
    <Container>
      <Field
        type={mockedData?.typeField}
        placeholder={mockedData?.placeholder}
        value={messageTyped}
        onChange={e => setMessageTyped(e.target.value)}
      />

      <Button>
        <Icon
          src={mockedData?.buttonIcon}
          title={mockedData?.buttonTitle}
          onClick={handleSendMessage}
        />
      </Button>
    </Container>
  );
};