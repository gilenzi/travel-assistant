import React from "react";
import Wishlist from "../Wishlist/Wishlist";
import {
  Feature,
  HotelCard as HotelCardProps,
} from "../../services/hotelService";
import { useTheme } from "styled-components";
import {
  Card,
  CardBottomSection,
  CardContent,
  CardDescription,
  CardDescriptionText,
  CardDescriptionTitle,
  CardDescriptionWrapper,
  CardImage,
  CardImageWrapper,
  CardTopSection,
  CardWishlistWrapper,
  FeaturesList,
  FeaturesListItem,
  FeaturesListItemText,
  FeaturesListWrapper,
  HotelName,
  RecommendedText,
} from "./styles";

export function HotelCard({
  id,
  name,
  price,
  currency,
  distance,
  availability,
  features,
  imageUrl,
  recommended,
}: HotelCardProps) {
  const {
    colors: { highlight },
  } = useTheme();

  return (
    <Card>
      <CardTopSection>
        <CardImageWrapper>
          <CardWishlistWrapper>
            <Wishlist
              hotelId={id}
              onWihslistClick={(hotelId) =>
                console.log(`Do something with hotel card id ${hotelId}.`)
              }
            />
          </CardWishlistWrapper>
          <CardImage src={imageUrl} alt={name} />
        </CardImageWrapper>
        <FeaturesListWrapper>
          {recommended && <RecommendedText>Top recommendation</RecommendedText>}
          <FeaturesList>
            {features.map((feature: Feature) => (
              <FeaturesListItem key={`${id}-${feature.name}`}>
                {React.createElement(feature.icon, { color: highlight })}
                <FeaturesListItemText>{feature.name}</FeaturesListItemText>
              </FeaturesListItem>
            ))}
          </FeaturesList>
        </FeaturesListWrapper>
      </CardTopSection>
      <CardBottomSection>
        <CardContent>
          <HotelName>{name}</HotelName>
          <CardDescriptionWrapper>
            <CardDescription>
              <CardDescriptionTitle>Cost</CardDescriptionTitle>
              <CardDescriptionText>
                {currency} {price} / night
              </CardDescriptionText>
            </CardDescription>
            <CardDescription>
              <CardDescriptionTitle>Maps</CardDescriptionTitle>
              <CardDescriptionText>{distance}</CardDescriptionText>
            </CardDescription>
            <CardDescription>
              <CardDescriptionTitle>Available</CardDescriptionTitle>
              <CardDescriptionText>
                Availability: {availability} rooms left
              </CardDescriptionText>
            </CardDescription>
          </CardDescriptionWrapper>
        </CardContent>
      </CardBottomSection>
    </Card>
  );
}
