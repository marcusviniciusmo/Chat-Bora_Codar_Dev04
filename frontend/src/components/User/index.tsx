import { useEffect, useState } from 'react';
import { UserMocks } from '../../types/User';
import { MockedData } from '../../mocks/User';
import { Container, Content, Avatar, Icons, Icon } from "./styles";

export function User() {
  const [mockedData, setMockedData] = useState<UserMocks[]>([]);

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Container>
      <Content>
        <Avatar>NO PHOTO</Avatar>

        <Icons>
          {
            mockedData.map((icon) => {
              return (
                <Icon>
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