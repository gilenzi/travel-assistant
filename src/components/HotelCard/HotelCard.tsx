import theme from '../../styles/theme';
import {IconType} from 'react-icons';
import Wishlist from '$components/Wishlist/Wishlist';
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
  HotelName,
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
        <FeaturesList>
          {features.map((feature: any) => (
            <FeaturesListItem key={`${id}-${feature.name}`}>
              {<feature.icon color={highlight} />}
              <FeaturesListItemText>{feature.name}</FeaturesListItemText>
            </FeaturesListItem>
          ))}
        </FeaturesList>
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
