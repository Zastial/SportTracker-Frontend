import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { loadFavoriteStatus, toggleFavorite, resetFavorite } from '../utils/Favorite';

interface FavoriteButtonProps {
  sportName: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ sportName }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    loadFavoriteStatus(sportName).then(status => {
      if (status !== undefined || status !== null) {
        setIsFavorite(status);
      }
    });
  }, [sportName]);

  const handleToggleFavorite = async () => {

    // const value = await resetFavorite();
    // console.log("VALUE : " + value);

    // console.log("BUTTON : " + sportName + " " + isFavorite);
    const newStatus = await toggleFavorite(sportName, isFavorite);
    if (newStatus !== undefined) {
      setIsFavorite(newStatus);
    }
  };

  return (
    <TouchableOpacity onPress={handleToggleFavorite} style={{ marginRight: 15 }}>
      <Ionicons
        name={isFavorite ? 'star' : 'star-outline'}
        size={24}
        color={isFavorite ? 'gold' : 'gray'}
      />
    </TouchableOpacity>
  );
};

export default FavoriteButton;