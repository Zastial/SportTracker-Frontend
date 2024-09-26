import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { loadFavoriteStatus, toggleFavorite, resetFavorite } from '../utils/Favorite';

interface FavoriteButtonProps {
  sportName: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ sportName }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (sportName === 'SportTracker') {
      setHidden(true)
    }

    loadFavoriteStatus(sportName).then(status => {
      if (status !== undefined || status !== null) {
        setIsFavorite(status);
      }
    });
  }, [sportName]);

  const handleToggleFavorite = async () => {
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
        style={{ display: hidden ? 'none' : 'flex' }}
      />
    </TouchableOpacity>
  );
};

export default FavoriteButton;