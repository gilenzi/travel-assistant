import {useState} from 'react';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {WishlistWrapper, WishlistButton} from './styles';

interface WishlistProps {
  hotelId: number;
  onWihslistClick?: (id: number) => void;
}

export default function Wishlist({onWihslistClick, hotelId}: WishlistProps) {
  const [clicked, setClicked] = useState<boolean>(false);

  function toggleHandler() {
    setClicked(!clicked);
    onWihslistClick?.(hotelId);
  }

  return (
    <WishlistWrapper>
      <WishlistButton onClick={toggleHandler}>
        {clicked ? (
          <AiFillHeart style={{color: 'white', fontSize: '24px'}} />
        ) : (
          <AiOutlineHeart style={{color: 'white', fontSize: '24px'}} />
        )}
      </WishlistButton>
    </WishlistWrapper>
  );
}
