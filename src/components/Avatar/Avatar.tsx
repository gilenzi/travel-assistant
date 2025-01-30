import avatar from '$images/avatar.jpg';
import {
  AvatarDescription,
  AvatarGreeting,
  AvatarName,
  AvatarProfileImage,
  AvatarWrapper,
} from './styles';

export function Avatar() {
  return (
    <AvatarWrapper>
      <AvatarProfileImage src={avatar} />
      <AvatarDescription>
        <AvatarGreeting>Hello,</AvatarGreeting>
        <AvatarName>Anthony</AvatarName>
      </AvatarDescription>
    </AvatarWrapper>
  );
}
