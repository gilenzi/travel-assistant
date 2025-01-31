import avatar from "../../assets/images/avatar.jpg";
import {
  AvatarDescription,
  AvatarGreeting,
  AvatarName,
  AvatarProfileImage,
  AvatarWrapper,
} from "./styles";

interface AvatarProps {
  name: string;
  greet?: string;
}

export function Avatar({ greet = "Hello,", name }: AvatarProps) {
  return (
    <AvatarWrapper>
      <AvatarProfileImage src={avatar} />
      <AvatarDescription>
        <AvatarGreeting>{greet}</AvatarGreeting>
        <AvatarName>{name}</AvatarName>
      </AvatarDescription>
    </AvatarWrapper>
  );
}
