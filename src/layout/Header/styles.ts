import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme: {colors}}) => colors.secondaryBackground};
  border-radius: 20px;
  padding: 0.55rem 1.2rem;
`;

export const UserWrapper = styled.header`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
