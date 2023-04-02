import { useEffect, useState } from "react";
import { NoUserMocks } from "../../types/NoUser";
import { MockedData } from "../../mocks/NoUser";
import { Container, Message } from "./styles";

export function NoUser() {
  const [mockedData, setMockedData] = useState<NoUserMocks>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Container>
      <Message>{mockedData?.labelNoUser}</Message>
    </Container>
  );
};