import ChatAvatar from '../../components/ChatAvatar/ChatAvatar';
import {HotelList} from '../../components/HotelList/HotelList';
import VoiceSearchAssistant from '../../components/VoiceSearchAssistant/VoiceSearchAssistant';
import {MainContainer, Sidebar, HotelsListWrapper} from './styles';

export function Main() {
  return (
    <MainContainer>
      <Sidebar>
        <VoiceSearchAssistant />
        <ChatAvatar />
      </Sidebar>
      <HotelsListWrapper>
        <HotelList />
      </HotelsListWrapper>
    </MainContainer>
  );
}
