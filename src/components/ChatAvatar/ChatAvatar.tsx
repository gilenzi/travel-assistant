import VoiceAvatar from '../../assets/images/voice-avatar.png';
import {ChatAvatarWrapper, ChatAvatarImage} from './styles';

export default function ChatAvatar() {
  return (
    <ChatAvatarWrapper>
      <ChatAvatarImage src={VoiceAvatar} alt="Voice avatar" />
    </ChatAvatarWrapper>
  );
}
