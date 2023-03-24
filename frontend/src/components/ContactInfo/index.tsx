import ContactAvatar from '../../assets/contactAvatar.png';
import CloseIcon from '../../assets/closeIcon.png';
import * as Styles from "./styles";

export function ContactInfo() {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Avatar>
          <Styles.ContactImg src={ContactAvatar} />
        </Styles.Avatar>

        <Styles.Info>
          <Styles.Name>Cecilia Sassaki</Styles.Name>

          <Styles.Status>
            <Styles.Ellipse />
            <Styles.Description>Online</Styles.Description>
          </Styles.Status>
        </Styles.Info>

        <Styles.Close>
          <Styles.Icon src={CloseIcon} title='Close' />
        </Styles.Close>
      </Styles.Content>

      <Styles.DateTime>11:30</Styles.DateTime>
    </Styles.Container>
  );
};