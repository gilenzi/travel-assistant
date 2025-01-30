import styled from 'styled-components';

export const NotificationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0.5rem;
  background-color: ${({theme: {colors}}) => colors.secondaryBackgroundLight};
`;
