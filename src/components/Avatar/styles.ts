import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  display: flex;
`;

export const AvatarProfileImage = styled.img`
  border-radius: 50%;
  max-height: 2rem;
`;

export const AvatarDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.7rem;
`;

export const AvatarGreeting = styled.span`
  color: ${({theme: {colors}}) => colors.textPrimary};
`;

export const AvatarName = styled.span`
  color: ${({theme: {colors}}) => colors.textPrimary};
`;
