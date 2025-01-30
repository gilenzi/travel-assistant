import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: ${({theme}) => theme.shadows.subtle};
  overflow: hidden;
  width: 100%;
  padding: 1rem;
`;

export const CardImageWrapper = styled.div`
  position: relative;
  width: 50%;
`;

export const CardImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 150px;
  object-fit: cover;

  @media ${({theme: {device}}) => device.laptopL} {
    height: 220px;
  }
`;

export const CardContent = styled.div`
  margin-top: 1rem;
`;

export const HotelName = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: normal;
  color: ${({theme}) => theme.colors.textPrimary};
`;

export const RecommendedText = styled.h4`
  font-size: 18px;
  font-weight: normal;
  color: lightgreen;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;

export const FeaturesListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
`;

export const FeaturesListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.secondaryBackground};
  color: ${({theme}) => theme.colors.textPrimary};
  padding: 0.3rem 0.6rem;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 8px;
  font-size: ${({theme: {fonts}}) => fonts.sizes.sm};
  height: fit-content;
  width: fit-content;

  &:not(:last-child) {
    margin-right: 4px;
  }
`;

export const FeaturesListItemText = styled.span`
  font-size: ${({theme: {fonts}}) => fonts.sizes.small};
  margin-left: 0.4rem;
`;

export const CardTopSection = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const CardBottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CardDescriptionWrapper = styled.div`
  display: flex;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(1) {
    padding-right: 1rem;
  }

  &:nth-child(2) {
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0 1rem;
  }

  &:nth-child(3) {
    padding-left: 1rem;
  }
`;

export const CardDescriptionTitle = styled.h4`
  color: ${({theme}) => theme.colors.textSecondary};
  font-size: ${({theme: {fonts}}) => fonts.sizes.small};
  margin-bottom: 0.8rem;
  text-transform: uppercase;
`;

export const CardDescriptionText = styled.p`
  color: ${({theme}) => theme.colors.textPrimary};
  font-size: ${({theme: {fonts}}) => fonts.sizes.small};
`;

export const CardWishlistWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
