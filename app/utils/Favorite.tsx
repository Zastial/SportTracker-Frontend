import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadFavoriteStatus = async (sportName: string) => {
    try {
      const value = await AsyncStorage.getItem(`@favorite_${sportName.toLowerCase()}`);
      if (value !== null) {
        return JSON.parse(value);
      } else {
        await toggleFavorite(sportName, false);
        return false;
      }
    } catch (error) {
      console.error('Erreur lors du chargement du statut favori:', error);
    }
  };

export const toggleFavorite = async (sportName: string, isFavorite: boolean) => {
    try {
        let newStatus;
        if (isFavorite === null || isFavorite === undefined || isFavorite === false) {
            newStatus = true;
        } else {
            newStatus = false;
        }
      await AsyncStorage.setItem(`@favorite_${sportName.toLowerCase()}`, JSON.stringify(newStatus));
      return newStatus;
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du statut favori:', error);
    }
};

export const resetFavorite = async () => {
    await AsyncStorage.clear();
    await AsyncStorage.setItem(`@favorite_${"FORMULA1".toLowerCase()}`, JSON.stringify(true));
    const value = await AsyncStorage.getItem(`@favorite_${"FORMULA1".toLowerCase()}`);
    if (value !== null) {
        return JSON.parse(value);
    }
    return false;
}