import voiceSearchImage from '../../assets/images/voice-search-image.png';
import {
  VoiceSearchAssistantWrapper,
  VoiceSearchAssistantText,
  VoiceSearchAssistantImage,
  VoiceSearchAssistantListeningText,
} from './styles';

export default function VoiceSearchAssistant() {
  return (
    <VoiceSearchAssistantWrapper>
      <VoiceSearchAssistantText>
        Please find me some hotel stays in Riyadh...
      </VoiceSearchAssistantText>
      <div>
        <VoiceSearchAssistantImage src={voiceSearchImage} />
        <VoiceSearchAssistantListeningText>
          Listening...
        </VoiceSearchAssistantListeningText>
      </div>
    </VoiceSearchAssistantWrapper>
  );
}
