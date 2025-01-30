import hotelRoom1 from '../assets/images/hotel-room-1.jpeg';
import hotelRoom2 from '../assets/images/hotel-room-2.webp';

import {FaSwimmingPool, FaDumbbell, FaUtensils} from 'react-icons/fa';
import {MdBusinessCenter, MdSpa, MdStar} from 'react-icons/md';

const hotelsData = [
  {
    id: 1,
    name: 'Jaudyan Hotel, Olaya St.',
    price: 300,
    currency: 'CAD',
    distance: '257 km away',
    availability: 5,
    features: [
      {name: 'Business Centre', icon: MdBusinessCenter},
      {name: 'Spa', icon: MdSpa},
      {name: 'Gym', icon: FaDumbbell},
      {name: 'Swimming Pool', icon: FaSwimmingPool},
      {name: '5-Star', icon: MdStar},
      {name: 'Asian Food', icon: FaUtensils},
    ],
    imageUrl: hotelRoom1,
    recommended: true,
  },
  {
    id: 2,
    name: 'Hilton Riyadh, Olaya St.',
    price: 300,
    currency: 'CAD',
    distance: '257 km away',
    availability: 5,
    features: [
      {name: 'Business Centre', icon: MdBusinessCenter},
      {name: 'Spa', icon: MdSpa},
      {name: 'Gym', icon: FaDumbbell},
      {name: 'Swimming Pool', icon: FaSwimmingPool},
      {name: '5-Star', icon: MdStar},
      {name: 'Asian Food', icon: FaUtensils},
    ],
    imageUrl: hotelRoom2,
    recommended: false,
  },
];

export default hotelsData;
