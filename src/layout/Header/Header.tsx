import {MenuToggle} from '$components/MenuToggle/MenuToggle';
import {Avatar} from '$components/Avatar/Avatar';
import {Notification} from '$components/Notification/Notification';
import {StyledHeader, UserWrapper} from './styles';

export default function Header() {
  return (
    <StyledHeader>
      <UserWrapper>
        <MenuToggle />
        <Avatar />
      </UserWrapper>
      <Notification />
    </StyledHeader>
  );
}
