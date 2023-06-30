import { useEffect, useState } from 'react';
import { Avatar } from '../Avatar';
import { UserMocks } from '../../types/User';
import { MockedData } from '../../mocks/User';
import { Container, Content, Icons, Icon } from "./styles";

export function User() {
  const [mockedData, setMockedData] = useState<UserMocks[]>([]);

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Container>
      <Content>
        <Avatar />

        <Icons>
          {
            mockedData.map((icon) => {
              return (
                <Icon
                  key={icon.id}
                >
                  <icon.icon titleAccess={icon.title} />
                </Icon>
              )
            })
          }
        </Icons>
      </Content>
    </Container>
  );
};