import NoUserImage from '../../assets/noUserImage.jpg';
import { AvatarProps } from '../../types/Avatar';
import { Container } from './styles';

export function Avatar(props: AvatarProps) {
  return (
    <Container src={props.imageUrl ? props.imageUrl : NoUserImage} />
  );
};