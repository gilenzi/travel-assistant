import styled from 'styled-components';

export const VoiceSearchAssistantWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 2rem;
  min-height: 300px;
`;

export const VoiceSearchAssistantText = styled.p`
  color: ${({theme}) => theme.colors.textPrimary};
  font-size: ${({theme: {fonts}}) => fonts.sizes.body};
  text-align: center;
`;

export const VoiceSearchAssistantListeningText = styled(
  VoiceSearchAssistantText
)`
  margin-top: -1rem;
`;

export const VoiceSearchAssistantImage = styled.img`
  width: 100%;
  max-width: 200px;
  max-height: 150px;
`;
