import {HotelCard} from '$components/HotelCard/HotelCard';
import hotelsData from '../../data/hotels-data';
import {List} from './styles';

export function HotelList() {
  return (
    <List>
      {hotelsData.map((hotel) => (
        <HotelCard
          id={hotel.id}
          key={hotel.id}
          name={hotel.name}
          price={hotel.price}
          currency={hotel.currency}
          distance={hotel.distance}
          availability={hotel.availability}
          features={hotel.features}
          imageUrl={hotel.imageUrl}
        />
      ))}
    </List>
  );
}
