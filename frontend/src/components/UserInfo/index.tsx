import IconClose from '../../assets/iconClose.png';
import { UserInfoProps } from "../../types/UserInfo";
import * as Style from "./styles";

export function UserInfo(props: UserInfoProps) {
  return (
    <Style.Container>
      <Style.Info>
        <Style.Avatar background={props.background} />

        <Style.Details>
          <Style.Contact>{props.contactName}</Style.Contact>

          <Style.Status>
            <Style.Ellipse className={props.status} />

            <Style.Description className={props.status}>
              {props.status[0].toUpperCase() + props.status.substring(1)}
            </Style.Description>
          </Style.Status>
        </Style.Details>

        <Style.Close>
          <Style.Icon src={IconClose} title='Close' />
        </Style.Close>
      </Style.Info>

      <Style.Date>Hoje 11:30</Style.Date>
    </Style.Container>
  );
};