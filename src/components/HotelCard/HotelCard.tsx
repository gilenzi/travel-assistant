import theme from '../../styles/theme';
import {IconType} from 'react-icons';
import Wishlist from '../Wishlist/Wishlist';

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
} from './styles';

interface Feature {
  name: string;
  icon: IconType;
}

interface HotelCardProps {
  id: number;
  name: string;
  price: number;
  currency: string;
  distance: string;
  availability: number;
  features: Feature[];
  imageUrl: string;
  recommended: boolean;
}

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
    colors: {highlight},
  } = theme;

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
            {features.map((feature: any) => (
              <FeaturesListItem key={`${id}-${feature.name}`}>
                {<feature.icon color={highlight} />}
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
