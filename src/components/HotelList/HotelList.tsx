import { useEffect, useState } from "react";
import { HotelCard } from "../HotelCard/HotelCard";
import { Loader } from "../Loader/Loader";
import hotelService, {
  HotelCard as HotelCardProps,
} from "../../services/hotelService";
import { List } from "./styles";

export function HotelList() {
  const [hotels, setHotels] = useState<HotelCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    hotelService.getHotels().then((data) => {
      setHotels(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader loadingText="Loading hotels..." />;
  }

  return (
    <List>
      {hotels.map((hotel) => (
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
          recommended={hotel.recommended}
        />
      ))}
    </List>
  );
}
