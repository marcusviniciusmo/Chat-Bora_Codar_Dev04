import { useEffect, useState } from 'react';
import { SendMocks } from '../../types/Send';
import { MockedData } from '../../mocks/Send';
import { Container, Field, Button, Icon } from "./styles";

export function Send() {
  const [mockedData, setMockedData] = useState<SendMocks>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Container>
      <Field
        type={mockedData?.typeField}
        placeholder={mockedData?.placeholder}
      />

      <Button>
        <Icon
          src={mockedData?.buttonIcon}
          title={mockedData?.buttonTitle}
        />
      </Button>
    </Container>
  );
};