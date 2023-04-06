import NoUserImage from '../../assets/noUserImage.jpg';
import { Container } from './styles';

type AvatarProps = {
  imageUrl?: string;
};

export function Avatar(props: AvatarProps) {
  return (
    <Container src={props.imageUrl ? props.imageUrl : NoUserImage} />
  );
};