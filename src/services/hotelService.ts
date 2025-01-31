import { IconType } from "react-icons";
import hotelsData from "../data/hotels-data";

export interface Feature {
  name: string;
  icon: IconType;
}

export interface HotelCard {
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

const hotelService = {
  async getHotels(): Promise<HotelCard[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(hotelsData), 1500);
    });
  },

  async getHotelById(id: number): Promise<HotelCard | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const hotel = hotelsData.find((hotel) => hotel.id === id);
        resolve(hotel || null);
      }, 500);
    });
  },

  async getRecommendedHotels(): Promise<HotelCard[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const recommendedHotels = hotelsData.filter(
          (hotel) => hotel.recommended
        );
        resolve(recommendedHotels);
      }, 500);
    });
  },
};

export default hotelService;
