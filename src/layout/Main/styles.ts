import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  padding-bottom: 1rem;
`;

export const Sidebar = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media ${({theme: {device}}) => device.tablet} {
    flex-basis: calc(35% - 0.5rem);
    width: calc(35% - 0.5rem);
    max-width: calc(35% - 0.5rem);
  }
`;

export const HotelsListWrapper = styled.section`
  width: 100%;

  @media ${({theme: {device}}) => device.tablet} {
    flex-basis: calc(65% - 0.5rem);
    width: calc(65% - 0.5rem);
    max-width: calc(65% - 0.5rem);
  }
`;
