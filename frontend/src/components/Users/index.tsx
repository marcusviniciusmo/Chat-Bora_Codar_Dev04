import { useEffect, useState } from 'react';
import { UsersProps } from '../../types/Users';
import { MockedData } from '../../mocks/Users';
import * as Styles from "./styles";

export function Users() {
  const [mockedData, setMockedData] = useState<UsersProps[]>([]);

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Styles.Container>
      <h1>USERS Component</h1>

      <h1>SearchUser</h1>

      {
        mockedData.map((user) => {
          return (
            <Styles.UserContainer key={user.id}>
              <Styles.Avatar src={user.avatar} />

              <Styles.Info>
                <Styles.Name>{user.name}</Styles.Name>

                <Styles.LastMessage>
                  <Styles.User>{user.user}</Styles.User>

                  <Styles.Message>{user.lastMessage}</Styles.Message>
                </Styles.LastMessage>
              </Styles.Info>

              <Styles.Date>{user.date}</Styles.Date>
            </Styles.UserContainer>
          )
        })
      }
    </Styles.Container>
  );
};