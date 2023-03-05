import UserUser from '../../assets/userCecilia.png';
import * as Styles from "./styles";

export function Users() {
  return (
    <Styles.Container>
      <h1>USERS Component</h1>
      <h1>Search Bar</h1>

      <Styles.UserContainer>
        <Styles.Avatar src={UserUser} />

        <Styles.Info>
          <Styles.Name>Cecilia Sassaki</Styles.Name>

          <Styles.LastMessage>
            <Styles.User>Você: </Styles.User>

            <Styles.Message>#boraCodar! 🚀</Styles.Message>
          </Styles.LastMessage>
        </Styles.Info>

        <Styles.Date>Yesterday</Styles.Date>
      </Styles.UserContainer>
    </Styles.Container>
  );
};